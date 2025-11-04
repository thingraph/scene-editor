export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export type AssemblySizeType = 'large' | 'default' | 'small'

export type LanguageType = 'zh' | 'en' | null

export interface IAppState {
  layout: LayoutType
  assemblySize: AssemblySizeType
  language: LanguageType
  maximize: boolean
  primary: string
  isDark: boolean
  isGrey: boolean
  isWeak: boolean
  asideInverted: boolean
  headerInverted: boolean
  isCollapse: boolean
  accordion: boolean
  breadcrumb: boolean
  breadcrumbIcon: boolean
  tabs: boolean
  tabsIcon: boolean
  footer: boolean
}

export type ObjToKeyValArray<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]

export interface ITeamOption {
  id: number
  name: string
}
export interface IUserState {
  token: string
  userInfo: { [key: string]: any }
  clusters: string[]
  role: number[]
  teams: ITeamOption[]
  selectedTeam: ITeamOption
}
