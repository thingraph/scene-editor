import http from '@/api/http'

// get
export const jobsList = (params: any) => {
  return http.get(`/api/jobs`, params)
}

// post
export const jobsCreate = (data: any, params: any) => {
  return http.post(`/api/jobs`, data, { params })
}

// delete
export const jobsDelete = (params: any) => {
  return http.delete(`/api/jobs/${params.id}`, params)
}

// put
export const machinesPut = (params: any) => {
  return http.put(`/api/jobs`, params)
}

// Browser download
export const logDownload = (params: any) => {
  const baseUrl = import.meta.env.VITE_ROUTER_BASE_URL || ''
  const url =
    location.origin +
    `${baseUrl}/api/job/${params.id}/download?pod=${params.pod}&container=${params.container}`
  location.href = url
}
