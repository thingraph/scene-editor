import './assets/css/main.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/iconfont/iconfont2.css'

import { createApp, type App } from 'vue'
import pinia from '@/stores'

import app from './App.vue'
import router from './router'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import 'virtual:uno.css'

let MicroApp: App

function render(props: any = {}) {
  const { container } = props
  MicroApp = createApp(app)

  MicroApp.use(pinia)
  MicroApp.use(router)

  const c = container ? container.querySelector('#app') : '#app'

  MicroApp.mount(c)
}

// Run standalone
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
} else {
  // Run as qiankun micro-frontend
  console.info('vue3sub running as micro-frontend')
  renderWithQiankun({
    mount(props) {
      console.info('vue3sub mount', props)
      render(props)
    },
    bootstrap() {
      console.info('vue3sub bootstrap')
    },
    unmount(props) {
      console.info('vue3sub unmount', props)
      MicroApp.unmount()
    },
    update(props) {
      console.info('vue3sub update', props)
    }
  })
}
