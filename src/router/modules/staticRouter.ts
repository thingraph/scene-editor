import type { RouteRecordRaw } from 'vue-router'
import CloudLayout from '@/components/layouts/CloudLayout.vue'
import { HomeOutlined } from '@ant-design/icons-vue'

/**
 * staticRouter (static routes)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: CloudLayout,
    redirect: '/model-editor',
    meta: {
      icon: HomeOutlined,
      title: 'Model Editor',
      isHideChildren: true,
      parent: 'home'
    },
    children: [
      {
        path: '/model-editor',
        name: 'model-editor',
        meta: {
          title: 'Model Editor',
          parent: 'home'
        },
        component: () => import('@/views/model-editor/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    redirect: "/aboutDetail",
    component: CloudLayout,
    meta: {
      icon: HomeOutlined,
      title: 'About',
      isHideChildren: true,
      parent: 'about'
    },
    children: [
      {
        path: '/aboutDetail',
        name: 'aboutDetail',
        meta: {
          title: 'About',
          parent: 'about'
        },
        component: () => import('@/views/about/AboutView.vue')
      }
    ]
  },
  // {
  //   path: '/pages',
  //   name: 'pages',
  //   component: CloudLayout,
  //   meta: {
  //     icon: HomeOutlined,
  //     title: 'Pages',
  //     // isHideChildren: true,
  //     parent: 'pages'
  //   },
  //   children: [
  //     {
  //       path: '/pages-1',
  //       name: 'pages-1',
  //       meta: {
  //         title: 'Pages-1',
  //         parent: 'pages-1'
  //       },
  //       component: () => import('@/views/pages/pages-1/index.vue')
  //     },
  //     {
  //       path: '/pages-2',
  //       name: 'pages-2',
  //       meta: {
  //         title: 'Pages-2',
  //         parent: 'pages-2'
  //       },
  //       component: () => import('@/views/pages/pages-2/index.vue')
  //     }
  //   ]
  // }
]

/**
 * errorRouter (error page routes)
 */
export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/ErrorMessage/FourThree.vue'),
    meta: {
      title: '403 Page'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/ErrorMessage/FourFour.vue'),
    meta: {
      title: '404 Page'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/components/ErrorMessage/FiveHundred.vue'),
    meta: {
      title: '500 Page'
    }
  },
  // Resolve refresh routing warning
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/ErrorMessage/FourFour.vue')
  }
]
