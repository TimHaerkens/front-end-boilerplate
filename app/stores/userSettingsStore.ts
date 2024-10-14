import { defineStore } from 'pinia'
import type { ViewType } from '~/types/ViewType'

export const useUserSettingsStore = defineStore('userSettingsStore', {
  state: () => ({
    viewType: 'grid' as ViewType,
  }),
  actions: {
    setViewType(type: ViewType) {
      this.viewType = type
    },
  },
  persist: {
    enabled: true,
  },
})
