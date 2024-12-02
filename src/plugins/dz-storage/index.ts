import { type DzStorageType, localStore, sessionStore } from 'dz-storage'

declare global {
  interface Window {
    localStore: DzStorageType
    sessionStore: DzStorageType
  }
}

window.localStore = localStore
window.sessionStore = sessionStore
