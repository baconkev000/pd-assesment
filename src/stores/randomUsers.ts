import { defineStore } from 'pinia'
import { RandomUserAPI } from '@/services/api'

export const useUserStore = defineStore({
  id: 'seed',
  state: () => ({
    currentSeed: null,
    randomUsers: []
  }),
  getters: {},
  actions: {
    async getMultipleRandomUsers(results: number) {
      if (results <= 5000) {
        try {
          await RandomUserAPI.getMultipleRandomUsers(results, this.currentSeed).then((response) => {
            if (response.data) {
              this.randomUsers = response.data.results
              this.currentSeed = response.data.info.seed
            }
            return []
          })
        } catch {
          // do nothing
        }
      }
    }
  }
})
