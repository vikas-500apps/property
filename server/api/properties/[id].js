import { defineEventHandler, createError } from "h3"

export default defineEventHandler(async (event) => {
  const id = Number.parseInt(event.context.params.id)

  // Find property by ID
  const property = properties.find((p) => p.id === id)

  if (!property) {
    throw createError({
      statusCode: 404,
      statusMessage: "Property not found",
    })
  }

  return property
})

// Mock data (same as in index.js)
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    description:
      "Luxurious 1-bedroom apartment in the heart of downtown with stunning city views, modern appliances, and access to building amenities. This recently renovated unit features hardwood floors, stainless steel appliances, and a spacious layout. The building offers 24/7 security, a rooftop terrace, and is within walking distance to restaurants, shopping, and public transportation.",
    price: 1850,
    bedrooms: 1,
    bathrooms: 1,
    size: 750,
    address: "123 Main St, Downtown",
    location: "downtown",
    propertyType: "apartment",
    amenities: ["parking", "gym", "laundry"],
    images: [
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://img.freepik.com/premium-photo/apartment-house-home-residential-building-complex-with-gate-concept_250132-4865.jpg",
      "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    ],
    availableFrom: "2023-07-01",
    createdAt: "2023-06-15",
    features: [
      "Hardwood floors",
      "Stainless steel appliances",
      "Central air conditioning",
      "In-unit washer and dryer",
      "Walk-in closet",
      "Balcony with city views",
    ],
    nearbyAmenities: [
      "Public transportation (2 blocks)",
      "Grocery store (5 min walk)",
      "Restaurants and cafes (walking distance)",
      "Fitness center (in building)",
      "Park (10 min walk)",
    ],
    leaseTerms: {
      minLease: 12,
      securityDeposit: 1850,
      applicationFee: 50,
      petsAllowed: true,
      petDeposit: 300,
    },
  },
  {
    id: 2,
    title: "Spacious Family Home",
    description:
      "Beautiful 3-bedroom house with a large backyard, perfect for families. Recently renovated with modern finishes and appliances. This charming home features an open concept living area, updated kitchen with island, master suite with walk-in closet, and a finished basement that can be used as a family room or home office. The fenced backyard includes a patio area perfect for entertaining.",
    price: 2800,
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    address: "456 Oak Ave, Westside",
    location: "westside",
    propertyType: "house",
    amenities: ["parking", "pets", "laundry"],
    images: [
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://img.freepik.com/premium-photo/apartment-house-home-residential-building-complex-with-gate-concept_250132-4865.jpg",
      "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    ],
    availableFrom: "2023-08-01",
    createdAt: "2023-06-20",
    features: [
      "Newly renovated kitchen",
      "Hardwood floors",
      "Finished basement",
      "Fenced backyard",
      "Two-car garage",
      "Central heating and air conditioning",
    ],
    nearbyAmenities: [
      "Elementary school (5 min walk)",
      "Community park (3 blocks)",
      "Shopping center (5 min drive)",
      "Public library (10 min walk)",
      "Medical center (5 min drive)",
    ],
    leaseTerms: {
      minLease: 12,
      securityDeposit: 2800,
      applicationFee: 50,
      petsAllowed: true,
      petDeposit: 500,
    },
  },
  {
    id: 3,
    title: "Cozy Studio in Midtown",
    description:
      "Charming studio apartment in a quiet neighborhood, walking distance to shops, restaurants, and public transportation. This efficient space features built-in storage solutions, updated bathroom, and a kitchenette with modern appliances. The building includes shared laundry facilities and a small courtyard area for residents.",
    price: 1200,
    bedrooms: 0,
    bathrooms: 1,
    size: 500,
    address: "789 Pine St, Midtown",
    location: "midtown",
    propertyType: "apartment",
    amenities: ["laundry"],
    images: [
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    ],
    availableFrom: "2023-07-15",
    createdAt: "2023-06-25",
    features: [
      "Updated bathroom",
      "Built-in storage",
      "Kitchenette with modern appliances",
      "Large windows with good natural light",
      "Ceiling fan",
      "New flooring",
    ],
    nearbyAmenities: [
      "Bus stop (1 block)",
      "Coffee shops (walking distance)",
      "Grocery store (2 blocks)",
      "Laundromat (in building)",
      "Restaurants (5 min walk)",
    ],
    leaseTerms: {
      minLease: 6,
      securityDeposit: 1200,
      applicationFee: 35,
      petsAllowed: false,
      petDeposit: null,
    },
  },
  {
    id: 4,
    title: "Luxury Condo with Pool",
    description:
      "High-end 2-bedroom condo in a premium building with pool, fitness center, and 24-hour concierge service. This elegant unit features an open floor plan with gourmet kitchen, spa-like bathrooms, and a private balcony overlooking the city. The master suite includes a walk-in closet and en-suite bathroom with soaking tub.",
    price: 3200,
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    address: "101 Luxury Ln, Uptown",
    location: "uptown",
    propertyType: "condo",
    amenities: ["parking", "pool", "gym", "laundry"],
    images: [
      "https://img.freepik.com/premium-photo/large-house-with-large-front-door-large-tree-yard_1310085-3260.jpg",
      "https://img.freepik.com/premium-photo/apartment-house-home-residential-building-complex-with-gate-concept_250132-4865.jpg",
      "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    ],
    availableFrom: "2023-09-01",
    createdAt: "2023-07-01",
    features: [
      "Gourmet kitchen with granite countertops",
      "Stainless steel appliances",
      "Hardwood floors throughout",
      "Walk-in closets",
      "Spa-like bathrooms",
      "Private balcony",
      "In-unit washer and dryer",
    ],
    nearbyAmenities: [
      "Shopping mall (walking distance)",
      "Fine dining restaurants (in neighborhood)",
      "Public transportation (2 blocks)",
      "City park (5 min walk)",
      "Art galleries (nearby)",
    ],
    leaseTerms: {
      minLease: 12,
      securityDeposit: 3200,
      applicationFee: 75,
      petsAllowed: true,
      petDeposit: 500,
    },
  },
  {
    id: 5,
    title: "Renovated Townhouse",
    description:
      "Beautifully renovated 3-bedroom townhouse with modern finishes, private patio, and attached garage. This multi-level home features an open concept main floor with kitchen and living area, three spacious bedrooms upstairs, and a finished basement that can be used as a family room or home office.",
    price: 2500,
    bedrooms: 3,
    bathrooms: 2.5,
    size: 1600,
    address: "222 Townhouse Ter, Eastside",
    location: "eastside",
    propertyType: "townhouse",
    amenities: ["parking", "pets", "laundry"],
    images: [
      "https://img.freepik.com/premium-photo/large-house-with-large-front-door-large-tree-yard_1310085-3260.jpg",
      "https://img.freepik.com/premium-photo/apartment-house-home-residential-building-complex-with-gate-concept_250132-4865.jpg",
      "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    ],
    availableFrom: "2023-08-15",
    createdAt: "2023-07-05",
    features: [
      "Newly renovated kitchen and bathrooms",
      "Hardwood floors on main level",
      "Finished basement",
      "Private patio",
      "Attached one-car garage",
      "In-unit washer and dryer",
    ],
    nearbyAmenities: [
      "Elementary school (3 blocks)",
      "Community center (5 min walk)",
      "Shopping center (10 min walk)",
      "Public transportation (nearby)",
      "Parks and playgrounds (walking distance)",
    ],
    leaseTerms: {
      minLease: 12,
      securityDeposit: 2500,
      applicationFee: 50,
      petsAllowed: true,
      petDeposit: 400,
    },
  },
]

