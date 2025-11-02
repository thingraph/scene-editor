import type { RouteRecordRaw } from 'vue-router'
import CloudLayout from '@/components/layouts/CloudLayout.vue'
import { HomeOutlined } from '@ant-design/icons-vue'

/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: CloudLayout,
    redirect: '/page1',
    meta: {
      icon: HomeOutlined,
      title: 'page1',
      isHideChildren: true,
      parent: 'home'
    },
    children: [
      {
        path: '/page1',
        name: 'page1',
        meta: {
          title: 'page1',
          parent: 'home'
        },
        component: () => import('@/views/page1/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    redirect: "/aboutDetail",
    component: CloudLayout,
    meta: {
      icon: HomeOutlined,
      title: 'about',
      isHideChildren: true,
      parent: 'about'
    },
    children: [
      {
        path: '/aboutDetail',
        name: 'aboutDetail',
        meta: {
          title: 'about',
          parent: 'about'
        },
        component: () => import('@/views/about/AboutView.vue')
      }
    ]
  },
  {
    path: '/pages',
    name: 'pages',
    component: CloudLayout,
    meta: {
      icon: HomeOutlined,
      title: 'pages',
      // isHideChildren: true,
      parent: 'pages'
    },
    children: [
      {
        path: '/pages-1',
        name: 'pages-1',
        meta: {
          title: 'pages-1',
          parent: 'pages-1'
        },
        component: () => import('@/views/pages/pages-1/index.vue')
      },
      {
        path: '/pages-2',
        name: 'pages-2',
        meta: {
          title: 'pages-2',
          parent: 'pages-2'
        },
        component: () => import('@/views/pages/pages-2/index.vue')
      }
    ]
  }
]

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/ErrorMessage/FourThree.vue'),
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/ErrorMessage/FourFour.vue'),
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/components/ErrorMessage/FiveHundred.vue'),
    meta: {
      title: '500页面'
    }
  },
  // 解决刷新页面，路由警告
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/ErrorMessage/FourFour.vue')
  }
]
