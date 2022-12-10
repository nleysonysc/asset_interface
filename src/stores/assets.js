import { defineStore } from 'pinia'

export const useAssetStore = defineStore('assets', {
  state: () => ({
    assets: []
  }),
  getters: {},
  actions: {
    addAsset(newAsset) {
      this.assets.push(newAsset)
    }
  }
})
