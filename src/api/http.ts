import axios, { AxiosError } from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import NProgress from '@/config/nprogress'
import { LOGIN_URL } from '@/config/index'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/stores/modules/user'
import router from '@/router'

/**
 * Request response parameters (excluding data)
 */
export interface IResult {
  code: number
  msg: string
}
/**
 * Request response parameters (including data)
 */
export interface IResultData<T = any> extends IResult {
  data: T
}

/**
 * Request enums and defaults
 */
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = 500,
  OVERDUE = 401,
  TIMEOUT = 30000,
  TYPE = 'success'
}
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

/**
 * Validate HTTP status codes and show user-friendly messages
 */
export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      message.error('Bad Request. Please try again later.')
      break
    case 401:
      message.error('Unauthorized. Please log in again.')
      break
    case 403:
      message.error('Forbidden. You do not have access.')
      break
    case 404:
      message.error('Resource not found.')
      break
    case 405:
      message.error('Method Not Allowed. Please try again later.')
      break
    case 408:
      message.error('Request timed out. Please try again later.')
      break
    case 500:
      message.error('Internal Server Error.')
      break
    case 502:
      message.error('Bad Gateway.')
      break
    case 503:
      message.error('Service Unavailable.')
      break
    case 504:
      message.error('Gateway Timeout.')
      break
    default:
      message.error('Request failed.')
  }
}

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  noLoading?: boolean
}

const config = {
  // Default base URL, can be overridden in .env.* files
  baseURL: import.meta.env.VITE_API_URL as string,
  // Timeout
  timeout: ResultEnum.TIMEOUT as number,
  // Allow credentials for cross-site requests
  withCredentials: true
}

/**
 * HTTP request wrapper with interceptors
 */
class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    // create axios instance
    this.service = axios.create(config)

    /**
     * Request interceptor
     * Client -> [request interceptor] -> Server
     * Token (JWT) validation: attach token from store to headers
     */
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        const userStore = useUserStore()
        // If this request should not show loading, set noLoading in request config
        config.noLoading || NProgress.start()
        if (config.headers && typeof config.headers.set === 'function') {
          config.headers.set('x-access-token', userStore.token)
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    /**
     * Response interceptor
     * Server response -> [unified handling] -> Client
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        const userStore = useUserStore()
        NProgress.done()
        // Token expired / unauthorized
        if (data.code == ResultEnum.OVERDUE) {
          userStore.setToken('')
          router.replace(LOGIN_URL)
          message.error(data.msg)
          return Promise.reject(data)
        }
        // Global error handling (avoid errors when downloading binary without code)
        else if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        // Successful response
        else {
          return data
        }
      },
      async (error: AxiosError) => {
        const { response } = error
        NProgress.done()
        // Timeout & network errors may not have response
        if (error.message.indexOf('timeout') !== -1) message.error('Request timed out. Please try again later.')
        if (error.message.indexOf('Network Error') !== -1) message.error('Network error. Please check your connection.')
        // Handle HTTP status codes returned by server
        if (response) checkStatus(response.status)
        // If offline, redirect to 500 error page
        if (!window.navigator.onLine) router.replace('/500')
        return Promise.reject(error)
      }
    )
  }

  /**
   * Common HTTP methods
   */
  get<T>(url: string, params?: object, _object = {}): Promise<IResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, data?: object | string, _object = {}): Promise<IResultData<T>> {
    return this.service.post(url, data, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<IResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<IResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
  download(url: string, params?: object, _object = {}): Promise<BlobPart> {
    return this.service.post(url, params, { ..._object, responseType: 'blob' })
  }
}

export default new RequestHttp(config)
