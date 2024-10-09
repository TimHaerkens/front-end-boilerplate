import { defineStore } from 'pinia'

export const useUserSettingsStore = defineStore('userSettingsStore', {
  state: () => ({
    viewType: 'grid' as 'grid' | 'list',
  }),
  actions: {
    setViewType(type: 'grid' | 'list') {
      this.viewType = type
    },
  },
  persist: {
    enabled: true,
  },
})
