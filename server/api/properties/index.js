import { defineEventHandler, getQuery } from "h3"

export default defineEventHandler(async (event) => {
  // Get query parameters
  const query = getQuery(event)

  // Apply filters
  let filteredProperties = [...properties]

  // Filter by price range
  if (query.minPrice) {
    filteredProperties = filteredProperties.filter((p) => p.price >= Number.parseInt(query.minPrice))
  }

  if (query.maxPrice) {
    filteredProperties = filteredProperties.filter((p) => p.price <= Number.parseInt(query.maxPrice))
  }

  // Filter by bedrooms
  if (query.bedrooms) {
    const bedroomFilters = query.bedrooms.split(",")
    filteredProperties = filteredProperties.filter((p) => {
      if (bedroomFilters.includes("5+")) {
        return bedroomFilters.includes(p.bedrooms.toString()) || (p.bedrooms >= 5 && bedroomFilters.includes("5+"))
      }
      return bedroomFilters.includes(p.bedrooms.toString())
    })
  }

  // Filter by bathrooms
  if (query.bathrooms) {
    const bathroomFilters = query.bathrooms.split(",")
    filteredProperties = filteredProperties.filter((p) => {
      if (bathroomFilters.includes("4+")) {
        return bathroomFilters.includes(p.bathrooms.toString()) || (p.bathrooms >= 4 && bathroomFilters.includes("4+"))
      }
      return bathroomFilters.includes(p.bathrooms.toString())
    })
  }

  // Filter by property type
  if (query.propertyType) {
    filteredProperties = filteredProperties.filter((p) => p.propertyType === query.propertyType)
  }

  // Filter by location
  if (query.location) {
    filteredProperties = filteredProperties.filter((p) => p.location === query.location)
  }

  // Filter by amenities
  if (query.amenities) {
    const amenityFilters = query.amenities.split(",")
    filteredProperties = filteredProperties.filter((p) =>
      amenityFilters.every((amenity) => p.amenities.includes(amenity)),
    )
  }

  // Sort results
  if (query.sortBy) {
    switch (query.sortBy) {
      case "price_low":
        filteredProperties.sort((a, b) => a.price - b.price)
        break
      case "price_high":
        filteredProperties.sort((a, b) => b.price - a.price)
        break
      case "size_low":
        filteredProperties.sort((a, b) => a.size - b.size)
        break
      case "size_high":
        filteredProperties.sort((a, b) => b.size - a.size)
        break
      case "newest":
      default:
        filteredProperties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
    }
  }

  // Pagination
  const page = Number.parseInt(query.page) || 1
  const limit = Number.parseInt(query.limit) || 12
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const paginatedProperties = filteredProperties.slice(startIndex, endIndex)

  return {
    properties: paginatedProperties,
    total: filteredProperties.length,
    page,
    limit,
    totalPages: Math.ceil(filteredProperties.length / limit),
  }
})

// Mock data
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    description:
      "Luxurious 1-bedroom apartment in the heart of downtown with stunning city views, modern appliances, and access to building amenities.",
    price: 1850,
    bedrooms: 1,
    bathrooms: 1,
    size: 750,
    address: "123 Main St, Downtown",
    location: "downtown",
    propertyType: "apartment",
    amenities: ["parking", "gym", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-07-01",
    createdAt: "2023-06-15",
  },
  {
    id: 2,
    title: "Spacious Family Home",
    description:
      "Beautiful 3-bedroom house with a large backyard, perfect for families. Recently renovated with modern finishes and appliances.",
    price: 2800,
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    address: "456 Oak Ave, Westside",
    location: "westside",
    propertyType: "house",
    amenities: ["parking", "pets", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-08-01",
    createdAt: "2023-06-20",
  },
  {
    id: 3,
    title: "Cozy Studio in Midtown",
    description:
      "Charming studio apartment in a quiet neighborhood, walking distance to shops, restaurants, and public transportation.",
    price: 1200,
    bedrooms: 0,
    bathrooms: 1,
    size: 500,
    address: "789 Pine St, Midtown",
    location: "midtown",
    propertyType: "apartment",
    amenities: ["laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-07-15",
    createdAt: "2023-06-25",
  },
  {
    id: 4,
    title: "Luxury Condo with Pool",
    description:
      "High-end 2-bedroom condo in a premium building with pool, fitness center, and 24-hour concierge service.",
    price: 3200,
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    address: "101 Luxury Ln, Uptown",
    location: "uptown",
    propertyType: "condo",
    amenities: ["parking", "pool", "gym", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-09-01",
    createdAt: "2023-07-01",
  },
  {
    id: 5,
    title: "Renovated Townhouse",
    description: "Beautifully renovated 3-bedroom townhouse with modern finishes, private patio, and attached garage.",
    price: 2500,
    bedrooms: 3,
    bathrooms: 2.5,
    size: 1600,
    address: "222 Townhouse Ter, Eastside",
    location: "eastside",
    propertyType: "townhouse",
    amenities: ["parking", "pets", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-08-15",
    createdAt: "2023-07-05",
  },
  {
    id: 6,
    title: "Penthouse with City Views",
    description:
      "Stunning penthouse apartment with panoramic city views, gourmet kitchen, and private rooftop terrace.",
    price: 4500,
    bedrooms: 3,
    bathrooms: 3,
    size: 2200,
    address: "333 Skyline Dr, Downtown",
    location: "downtown",
    propertyType: "apartment",
    amenities: ["parking", "gym", "pool", "laundry", "pets"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-10-01",
    createdAt: "2023-07-10",
  },
  {
    id: 7,
    title: "Charming Cottage",
    description: "Quaint 2-bedroom cottage with character and charm, featuring a lovely garden and updated interior.",
    price: 1950,
    bedrooms: 2,
    bathrooms: 1,
    size: 900,
    address: "444 Garden Rd, Westside",
    location: "westside",
    propertyType: "house",
    amenities: ["parking", "pets"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-08-01",
    createdAt: "2023-07-15",
  },
  {
    id: 8,
    title: "Modern Loft Apartment",
    description:
      "Industrial-style loft with high ceilings, exposed brick, and open floor plan in a trendy neighborhood.",
    price: 2200,
    bedrooms: 1,
    bathrooms: 1,
    size: 950,
    address: "555 Loft Ave, Midtown",
    location: "midtown",
    propertyType: "apartment",
    amenities: ["parking", "laundry", "pets"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-09-15",
    createdAt: "2023-07-20",
  },
  {
    id: 9,
    title: "Family-Friendly Duplex",
    description: "Spacious 4-bedroom duplex with finished basement, backyard, and close to schools and parks.",
    price: 3000,
    bedrooms: 4,
    bathrooms: 3,
    size: 2000,
    address: "666 Family Cir, Uptown",
    location: "uptown",
    propertyType: "house",
    amenities: ["parking", "laundry", "pets"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-09-01",
    createdAt: "2023-07-25",
  },
  {
    id: 10,
    title: "Upscale Apartment with Balcony",
    description: "Elegant 2-bedroom apartment with private balcony, upscale finishes, and in-unit laundry.",
    price: 2600,
    bedrooms: 2,
    bathrooms: 2,
    size: 1100,
    address: "777 Luxury Blvd, Eastside",
    location: "eastside",
    propertyType: "apartment",
    amenities: ["parking", "gym", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-08-15",
    createdAt: "2023-08-01",
  },
  {
    id: 11,
    title: "Downtown Studio",
    description: "Compact and efficient studio apartment in the heart of downtown, perfect for young professionals.",
    price: 1350,
    bedrooms: 0,
    bathrooms: 1,
    size: 450,
    address: "888 Urban St, Downtown",
    location: "downtown",
    propertyType: "apartment",
    amenities: ["gym"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-08-01",
    createdAt: "2023-08-05",
  },
  {
    id: 12,
    title: "Suburban Ranch Home",
    description:
      "Single-level ranch home with 3 bedrooms, updated kitchen, and large backyard in a quiet neighborhood.",
    price: 2400,
    bedrooms: 3,
    bathrooms: 2,
    size: 1500,
    address: "999 Suburban Ln, Westside",
    location: "westside",
    propertyType: "house",
    amenities: ["parking", "pets", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-09-15",
    createdAt: "2023-08-10",
  },
  {
    id: 13,
    title: "Luxury Highrise Apartment",
    description:
      "Premium 2-bedroom apartment in a highrise building with concierge, fitness center, and stunning views.",
    price: 3500,
    bedrooms: 2,
    bathrooms: 2,
    size: 1300,
    address: "1010 Highrise Ave, Midtown",
    location: "midtown",
    propertyType: "apartment",
    amenities: ["parking", "gym", "pool", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-10-01",
    createdAt: "2023-08-15",
  },
  {
    id: 14,
    title: "Cozy Bungalow",
    description: "Charming 2-bedroom bungalow with character features, updated bathroom, and lovely front porch.",
    price: 1800,
    bedrooms: 2,
    bathrooms: 1,
    size: 850,
    address: "1111 Bungalow Rd, Uptown",
    location: "uptown",
    propertyType: "house",
    amenities: ["parking", "pets"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-09-01",
    createdAt: "2023-08-20",
  },
  {
    id: 15,
    title: "Executive Townhome",
    description: "Upscale 3-bedroom townhome with premium finishes, attached garage, and community amenities.",
    price: 3200,
    bedrooms: 3,
    bathrooms: 2.5,
    size: 1800,
    address: "1212 Executive Way, Eastside",
    location: "eastside",
    propertyType: "townhouse",
    amenities: ["parking", "gym", "pool", "laundry"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-10-15",
    createdAt: "2023-08-25",
  },
  {
    id: 16,
    title: "Spacious 5-Bedroom House",
    description: "Large family home with 5 bedrooms, finished basement, large backyard with deck, and 2-car garage.",
    price: 3800,
    bedrooms: 5,
    bathrooms: 3,
    size: 2800,
    address: "1313 Family Home Dr, Westside",
    location: "westside",
    propertyType: "house",
    amenities: ["parking", "laundry", "pets"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    availableFrom: "2023-11-01",
    createdAt: "2023-08-30",
  },
]

