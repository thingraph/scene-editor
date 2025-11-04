import { defineStore } from 'pinia'
import type { IAppState, ObjToKeyValArray } from '@/stores/interface'
import { DEFAULT_PRIMARY } from '@/config'
import piniaPersistConfig from '@/config/piniaPersist'

// After changing default values, clear localStorage data
export const useAppStore = defineStore({
  id: 'app-config',
  // After modifying default values, clear localStorage data
  state: (): IAppState => ({
    // Layout mode (vertical | classic | transverse | columns)
    layout: 'vertical',
    // Component size
    assemblySize: 'default',
    // Current system language
    language: null,
    // Whether the current page is fullscreen
    maximize: false,
    // Theme primary color
    primary: DEFAULT_PRIMARY,
    // Dark mode
    isDark: false,
    // Grey mode
    isGrey: false,
    // Color-weak mode
    isWeak: false,
    // Aside inverted
    asideInverted: false,
    // Header inverted
    headerInverted: false,
    // Collapsed menu
    isCollapse: false,
    // Menu accordion behavior
    accordion: false,
    // Breadcrumb navigation
    breadcrumb: true,
    // Breadcrumb icons
    breadcrumbIcon: true,
    // Tabs enabled
    tabs: true,
    // Tab icons
    tabsIcon: true,
    // Footer enabled
    footer: true
  }),
  getters: {},
  actions: {
    // Set AppState
    setAppState(...args: ObjToKeyValArray<IAppState>) {
      this.$patch({ [args[0]]: args[1] })
    }
  },
  persist: piniaPersistConfig('app-config')
})
