import { defineStore } from "pinia"

export const useComparisonStore = defineStore("comparison", {
  state: () => ({
    items: [],
    maxItems: 4,
  }),

  getters: {
    count: (state) => state.items.length,
    isCompared: (state) => (id) => state.items.some((item) => item.id === id),
    isFull: (state) => state.items.length >= state.maxItems,
  },

  actions: {
    addToComparison(property) {
      if (!this.isCompared(property.id) && !this.isFull) {
        this.items.push(property)
        this.saveToLocalStorage()
      }
    },

    removeFromComparison(id) {
      this.items = this.items.filter((item) => item.id !== id)
      this.saveToLocalStorage()
    },

    toggleCompare(property) {
      if (this.isCompared(property.id)) {
        this.removeFromComparison(property.id)
      } else {
        this.addToComparison(property)
      }
    },

    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem("comparison", JSON.stringify(this.items))
      }
    },

    loadFromLocalStorage() {
      if (process.client) {
        const stored = localStorage.getItem("comparison")
        if (stored) {
          this.items = JSON.parse(stored)
        }
      }
    },

    clearComparison() {
      this.items = []
      this.saveToLocalStorage()
    },
  },
})

