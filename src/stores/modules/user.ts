import { defineStore } from 'pinia'
import type { IUserState } from '@/stores/interface'
import piniaPersistConfig from '@/config/piniaPersist'

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    token: '',
    userInfo: {},
    clusters: [],
    teams: [],
    role: [],
    selectedTeam: { id: 0, name: '' }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: IUserState['userInfo']) {
      this.userInfo = userInfo || {}
    },
    setClusters(clusters: IUserState['clusters']) {
      this.clusters = clusters || []
    },
    setRoles(role: IUserState['role']) {
      this.role = role || []
    },
    setTeams(teams: IUserState['teams']) {
      this.teams = teams || []
    },
    setSelectedTeam(selectedTeam: IUserState['selectedTeam']) {
      this.selectedTeam = selectedTeam || { id: 0, name: '' }
    }
  },
  persist: piniaPersistConfig('user')
})
