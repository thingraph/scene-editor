import { createRouter, createWebHistory } from 'vue-router'

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { staticRouter, errorRouter } from '@/router/modules/staticRouter'
import NProgress from '@/config/nprogress'

const {
  pkg: { name }
} = __APP_INFO__

/**
 * @description Router parameters reference
 * @param path ==> route path
 * @param name ==> route name (matches the component name; can be used for KeepAlive and permission checks)
 * @param redirect ==> redirect path
 * @param component ==> view component path
 * @param meta ==> route metadata
 * @param meta.icon ==> icon for menu and breadcrumb
 * @param meta.title ==> route title (used for document.title or menu label)
 * @param meta.activeMenu ==> menu to highlight when current route is a detail page
 * @param meta.isLink ==> external link URL when route is an external link
 * @param meta.isHide ==> whether to hide in the menu (commonly used for list/detail pages)
 * @param meta.isHideChildren ==> whether to show only the parent menu
 * @param meta.isFull ==> whether the page is full-screen (e.g. dashboard)
 * @param meta.isAffix ==> whether the menu is affixed in the tab bar (home is usually affixed)
 * @param meta.isKeepAlive ==> whether to cache this route
 */
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  //
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? `/${name}` : import.meta.env.VITE_ROUTER_BASE_URL || '/'
  ),
  routes: [...staticRouter, ...errorRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * @description Route guard: beforeEach
 */
router.beforeEach(async (to, from, next) => {
  // 1. Start NProgress
  NProgress.start()

  // 2. Dynamically set document title
  const title = import.meta.env.VITE_APP_TITLE
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title

  // 3. Proceed to the route
  next()
})

/**
 * @description Reset router
 */
export const resetRouter = () => {}

/**
 * @description Router error handler
 */
router.onError((error) => {
  NProgress.done()
  console.warn('Router error', error.message)
})

/**
 * @description After each navigation
 */
router.afterEach(() => {
  NProgress.done()
})

export default router
