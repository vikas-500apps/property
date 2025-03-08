import { defineStore } from "pinia"

export const useFilterStore = defineStore("filter", {
  state: () => ({
    priceRange: [0, 5000],
    bedrooms: [],
    bathrooms: [],
    amenities: [],
    location: "",
    propertyType: "",
    sortBy: "newest",
  }),

  actions: {
    updateFilters(filters) {
      Object.assign(this, filters)
    },

    resetFilters() {
      this.priceRange = [0, 5000]
      this.bedrooms = []
      this.bathrooms = []
      this.amenities = []
      this.location = ""
      this.propertyType = ""
      this.sortBy = "newest"
    },

    getQueryParams() {
      const params = new URLSearchParams()

      if (this.priceRange[0] > 0) params.append("minPrice", this.priceRange[0].toString())
      if (this.priceRange[1] < 5000) params.append("maxPrice", this.priceRange[1].toString())

      if (this.bedrooms.length) params.append("bedrooms", this.bedrooms.join(","))
      if (this.bathrooms.length) params.append("bathrooms", this.bathrooms.join(","))
      if (this.amenities.length) params.append("amenities", this.amenities.join(","))

      if (this.location) params.append("location", this.location)
      if (this.propertyType) params.append("propertyType", this.propertyType)
      if (this.sortBy) params.append("sortBy", this.sortBy)

      return params
    },
  },
})

