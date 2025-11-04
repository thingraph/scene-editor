import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

/**
 * @description Pinia persisted state configuration
 * @param {String} key storage key name
 * @param {Array} paths state property paths to persist
 * @return persist options
 */
const piniaPersistConfig = (key: string, paths?: string[]) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    // storage: sessionStorage,
    paths
  }
  return persist
}

export default piniaPersistConfig
