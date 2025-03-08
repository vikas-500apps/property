<template>
  <div class="bg-secondary-50 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">Apply for a Property</h1>
      <p class="text-secondary-600 mb-8">
        Complete the form below to apply for your selected property
      </p>

      <!-- Property Selection -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-xl font-bold mb-4">Select a Property</h2>

        <div
          v-if="selectedProperty"
          class="mb-6 flex flex-col md:flex-row gap-6 items-start"
        >
          <img
            :src="selectedProperty.image"
            :alt="selectedProperty.title"
            class="w-full md:w-48 h-32 object-cover rounded-md"
          />
          <div>
            <h3 class="font-bold text-lg">{{ selectedProperty.title }}</h3>
            <p class="text-primary-600 font-medium">
              ${{ selectedProperty.price.toLocaleString() }}/month
            </p>
            <div class="flex items-center text-secondary-500 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span class="capitalize">{{ selectedProperty.location }}</span>
            </div>
            <div class="flex gap-4 mt-2 text-sm text-secondary-700">
              <div>{{ selectedProperty.bedrooms }} Beds</div>
              <div>{{ selectedProperty.bathrooms }} Baths</div>
              <div>{{ selectedProperty.sqft }} sqft</div>
            </div>
            <button
              @click="selectedProperty = null"
              class="text-primary-600 hover:text-primary-800 text-sm font-medium mt-2"
            >
              Change Property
            </button>
          </div>
        </div>

        <div v-else>
          <label
            for="propertySelect"
            class="block text-sm font-medium text-secondary-700 mb-1"
            >Property*</label
          >
          <select
            id="propertySelect"
            v-model="selectedPropertyId"
            class="select mb-4"
            @change="selectProperty"
            required
          >
            <option value="">Select a property</option>
            <option
              v-for="property in properties"
              :key="property.id"
              :value="property.id"
            >
              {{ property.title }} - ${{ property.price }}/month
            </option>
          </select>

          <div v-if="recentlyViewed.length > 0" class="mt-4">
            <h3 class="text-sm font-medium text-secondary-700 mb-2">
              Recently Viewed Properties:
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="property in recentlyViewed"
                :key="property.id"
                class="border border-secondary-200 rounded-md p-3 cursor-pointer hover:border-primary-500"
                @click="selectPropertyById(property.id)"
              >
                <div class="flex items-center gap-3">
                  <img
                    :src="property.image"
                    :alt="property.title"
                    class="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <div class="font-medium text-sm">{{ property.title }}</div>
                    <div class="text-primary-600 text-sm">
                      ${{ property.price }}/month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Form -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-xl font-bold mb-6">Application Details</h2>

        <form @submit.prevent="submitApplication">
          <!-- Personal Information -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">
              Personal Information
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >First Name*</label
                >
                <input
                  type="text"
                  id="firstName"
                  v-model="application.firstName"
                  class="input"
                  :class="{ 'border-red-500': errors.firstName }"
                  required
                />
                <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
                  {{ errors.firstName }}
                </p>
              </div>

              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Last Name*</label
                >
                <input
                  type="text"
                  id="lastName"
                  v-model="application.lastName"
                  class="input"
                  :class="{ 'border-red-500': errors.lastName }"
                  required
                />
                <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                  {{ errors.lastName }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Email Address*</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="application.email"
                  class="input"
                  :class="{ 'border-red-500': errors.email }"
                  required
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                  {{ errors.email }}
                </p>
              </div>

              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Phone Number*</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="application.phone"
                  class="input"
                  :class="{ 'border-red-500': errors.phone }"
                  required
                />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
                  {{ errors.phone }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="dob"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Date of Birth*</label
                >
                <input
                  type="date"
                  id="dob"
                  v-model="application.dob"
                  class="input"
                  :class="{ 'border-red-500': errors.dob }"
                  required
                />
                <p v-if="errors.dob" class="mt-1 text-sm text-red-600">
                  {{ errors.dob }}
                </p>
              </div>

              <div>
                <label
                  for="ssn"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Social Security Number*</label
                >
                <input
                  type="text"
                  id="ssn"
                  v-model="application.ssn"
                  placeholder="XXX-XX-XXXX"
                  class="input"
                  :class="{ 'border-red-500': errors.ssn }"
                  required
                />
                <p v-if="errors.ssn" class="mt-1 text-sm text-red-600">
                  {{ errors.ssn }}
                </p>
                <p class="mt-1 text-xs text-secondary-500">
                  Your information is encrypted and secure.
                </p>
              </div>
            </div>

            <div>
              <label
                for="currentAddress"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Current Address*</label
              >
              <input
                type="text"
                id="currentAddress"
                v-model="application.currentAddress"
                class="input mb-2"
                :class="{ 'border-red-500': errors.currentAddress }"
                placeholder="Street Address"
                required
              />
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  v-model="application.currentCity"
                  class="input"
                  :class="{ 'border-red-500': errors.currentCity }"
                  placeholder="City"
                  required
                />
                <input
                  type="text"
                  v-model="application.currentState"
                  class="input"
                  :class="{ 'border-red-500': errors.currentState }"
                  placeholder="State"
                  required
                />
                <input
                  type="text"
                  v-model="application.currentZip"
                  class="input"
                  :class="{ 'border-red-500': errors.currentZip }"
                  placeholder="ZIP Code"
                  required
                />
              </div>
              <p v-if="errors.currentAddress" class="mt-1 text-sm text-red-600">
                {{ errors.currentAddress }}
              </p>
            </div>
          </div>

          <!-- Employment Information -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">
              Employment Information
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="employer"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Current Employer*</label
                >
                <input
                  type="text"
                  id="employer"
                  v-model="application.employer"
                  class="input"
                  :class="{ 'border-red-500': errors.employer }"
                  required
                />
                <p v-if="errors.employer" class="mt-1 text-sm text-red-600">
                  {{ errors.employer }}
                </p>
              </div>

              <div>
                <label
                  for="position"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Position/Title*</label
                >
                <input
                  type="text"
                  id="position"
                  v-model="application.position"
                  class="input"
                  :class="{ 'border-red-500': errors.position }"
                  required
                />
                <p v-if="errors.position" class="mt-1 text-sm text-red-600">
                  {{ errors.position }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="income"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Monthly Income*</label
                >
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <span class="text-secondary-500">$</span>
                  </div>
                  <input
                    type="number"
                    id="income"
                    v-model="application.income"
                    class="input pl-7"
                    :class="{ 'border-red-500': errors.income }"
                    required
                  />
                </div>
                <p v-if="errors.income" class="mt-1 text-sm text-red-600">
                  {{ errors.income }}
                </p>
              </div>

              <div>
                <label
                  for="employmentLength"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Length of Employment*</label
                >
                <select
                  id="employmentLength"
                  v-model="application.employmentLength"
                  class="select"
                  :class="{ 'border-red-500': errors.employmentLength }"
                  required
                >
                  <option value="">Select length</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">More than 5 years</option>
                </select>
                <p
                  v-if="errors.employmentLength"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.employmentLength }}
                </p>
              </div>
            </div>

            <div>
              <label
                for="employerContact"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Employer Contact Information*</label
              >
              <input
                type="text"
                id="employerContact"
                v-model="application.employerContact"
                class="input"
                :class="{ 'border-red-500': errors.employerContact }"
                placeholder="Contact Name and Phone Number"
                required
              />
              <p
                v-if="errors.employerContact"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.employerContact }}
              </p>
            </div>
          </div>

          <!-- Rental History -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">
              Rental History
            </h3>

            <div class="mb-6">
              <label
                for="currentLandlord"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Current Landlord Name*</label
              >
              <input
                type="text"
                id="currentLandlord"
                v-model="application.currentLandlord"
                class="input"
                :class="{ 'border-red-500': errors.currentLandlord }"
                required
              />
              <p
                v-if="errors.currentLandlord"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.currentLandlord }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="landlordPhone"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Landlord Phone Number*</label
                >
                <input
                  type="tel"
                  id="landlordPhone"
                  v-model="application.landlordPhone"
                  class="input"
                  :class="{ 'border-red-500': errors.landlordPhone }"
                  required
                />
                <p
                  v-if="errors.landlordPhone"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.landlordPhone }}
                </p>
              </div>

              <div>
                <label
                  for="rentalLength"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Length at Current Address*</label
                >
                <select
                  id="rentalLength"
                  v-model="application.rentalLength"
                  class="select"
                  :class="{ 'border-red-500': errors.rentalLength }"
                  required
                >
                  <option value="">Select length</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">More than 5 years</option>
                </select>
                <p v-if="errors.rentalLength" class="mt-1 text-sm text-red-600">
                  {{ errors.rentalLength }}
                </p>
              </div>
            </div>

            <div class="mb-6">
              <label
                for="reasonForMoving"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Reason for Moving*</label
              >
              <textarea
                id="reasonForMoving"
                v-model="application.reasonForMoving"
                rows="3"
                class="input"
                :class="{ 'border-red-500': errors.reasonForMoving }"
                required
              ></textarea>
              <p
                v-if="errors.reasonForMoving"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.reasonForMoving }}
              </p>
            </div>
          </div>

          <!-- Additional Occupants -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">
              Additional Occupants
            </h3>

            <div
              v-for="(occupant, index) in application.additionalOccupants"
              :key="index"
              class="mb-6 p-4 border border-secondary-200 rounded-md"
            >
              <div class="flex justify-between items-center mb-4">
                <h4 class="font-medium">Occupant {{ index + 1 }}</h4>
                <button
                  type="button"
                  @click="removeOccupant(index)"
                  class="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </button>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  v-model="occupant.name"
                  class="input"
                  placeholder="Full Name*"
                  required
                />
                <input
                  type="text"
                  v-model="occupant.relationship"
                  class="input"
                  placeholder="Relationship to Applicant*"
                  required
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  v-model="occupant.dob"
                  class="input"
                  placeholder="Date of Birth*"
                  required
                />
                <input
                  type="text"
                  v-model="occupant.phone"
                  class="input"
                  placeholder="Phone Number (if applicable)"
                />
              </div>
            </div>

            <button
              type="button"
              @click="addOccupant"
              class="flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
              Add Another Occupant
            </button>
          </div>

          <!-- References -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">References</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="reference1Name"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Reference 1 Name*</label
                >
                <input
                  type="text"
                  id="reference1Name"
                  v-model="application.reference1Name"
                  class="input"
                  :class="{ 'border-red-500': errors.reference1Name }"
                  required
                />
                <p
                  v-if="errors.reference1Name"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.reference1Name }}
                </p>
              </div>

              <div>
                <label
                  for="reference1Phone"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Reference 1 Phone*</label
                >
                <input
                  type="tel"
                  id="reference1Phone"
                  v-model="application.reference1Phone"
                  class="input"
                  :class="{ 'border-red-500': errors.reference1Phone }"
                  required
                />
                <p
                  v-if="errors.reference1Phone"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.reference1Phone }}
                </p>
              </div>
            </div>

            <div class="mb-6">
              <label
                for="reference1Relationship"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Relationship to Reference 1*</label
              >
              <input
                type="text"
                id="reference1Relationship"
                v-model="application.reference1Relationship"
                class="input"
                :class="{ 'border-red-500': errors.reference1Relationship }"
                required
              />
              <p
                v-if="errors.reference1Relationship"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.reference1Relationship }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="reference2Name"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Reference 2 Name*</label
                >
                <input
                  type="text"
                  id="reference2Name"
                  v-model="application.reference2Name"
                  class="input"
                  :class="{ 'border-red-500': errors.reference2Name }"
                  required
                />
                <p
                  v-if="errors.reference2Name"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.reference2Name }}
                </p>
              </div>

              <div>
                <label
                  for="reference2Phone"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Reference 2 Phone*</label
                >
                <input
                  type="tel"
                  id="reference2Phone"
                  v-model="application.reference2Phone"
                  class="input"
                  :class="{ 'border-red-500': errors.reference2Phone }"
                  required
                />
                <p
                  v-if="errors.reference2Phone"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.reference2Phone }}
                </p>
              </div>
            </div>

            <div>
              <label
                for="reference2Relationship"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Relationship to Reference 2*</label
              >
              <input
                type="text"
                id="reference2Relationship"
                v-model="application.reference2Relationship"
                class="input"
                :class="{ 'border-red-500': errors.reference2Relationship }"
                required
              />
              <p
                v-if="errors.reference2Relationship"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.reference2Relationship }}
              </p>
            </div>
          </div>

          <!-- Additional Information -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">
              Additional Information
            </h3>

            <div class="mb-6">
              <label
                for="pets"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Do you have any pets?*</label
              >
              <div class="flex items-center space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="hasPets"
                    :value="true"
                    v-model="application.hasPets"
                    class="mr-2"
                  />
                  <span>Yes</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="hasPets"
                    :value="false"
                    v-model="application.hasPets"
                    class="mr-2"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div v-if="application.hasPets" class="mb-6">
              <label
                for="petDetails"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Pet Details*</label
              >
              <textarea
                id="petDetails"
                v-model="application.petDetails"
                rows="3"
                class="input"
                :class="{ 'border-red-500': errors.petDetails }"
                placeholder="Type, breed, size, age, etc."
                required
              ></textarea>
              <p v-if="errors.petDetails" class="mt-1 text-sm text-red-600">
                {{ errors.petDetails }}
              </p>
            </div>

            <div class="mb-6">
              <label
                for="smoker"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Are you a smoker?*</label
              >
              <div class="flex items-center space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="isSmoker"
                    :value="true"
                    v-model="application.isSmoker"
                    class="mr-2"
                  />
                  <span>Yes</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="isSmoker"
                    :value="false"
                    v-model="application.isSmoker"
                    class="mr-2"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div class="mb-6">
              <label
                for="additionalInfo"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Additional Information</label
              >
              <textarea
                id="additionalInfo"
                v-model="application.additionalInfo"
                rows="4"
                class="input"
                placeholder="Any other information you'd like us to know about your application"
              ></textarea>
            </div>
          </div>

          <!-- Terms and Consent -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4 pb-2 border-b">
              Terms and Consent
            </h3>

            <div class="mb-6">
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="application.backgroundCheckConsent"
                  class="mt-1 mr-2"
                  required
                />
                <span class="text-sm text-secondary-700">
                  I authorize PropertyPortal to obtain a consumer report, which
                  may include credit, criminal background, and eviction history,
                  and to verify all information provided in this application.*
                </span>
              </label>
              <p
                v-if="errors.backgroundCheckConsent"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.backgroundCheckConsent }}
              </p>
            </div>

            <div class="mb-6">
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="application.termsConsent"
                  class="mt-1 mr-2"
                  required
                />
                <span class="text-sm text-secondary-700">
                  I certify that all information provided in this application is
                  true and complete. I understand that providing false
                  information may result in rejection of my application or
                  termination of tenancy.*
                </span>
              </label>
              <p v-if="errors.termsConsent" class="mt-1 text-sm text-red-600">
                {{ errors.termsConsent }}
              </p>
            </div>
          </div>

          <!-- Application Fee -->
          <div class="mb-8 p-6 bg-secondary-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Application Fee</h3>
            <p class="text-secondary-700 mb-4">
              There is a non-refundable application fee of $50 to process your
              application. This fee covers the cost of background checks, credit
              reports, and administrative processing.
            </p>

            <div class="mb-4">
              <label
                for="paymentMethod"
                class="block text-sm font-medium text-secondary-700 mb-1"
                >Payment Method*</label
              >
              <select
                id="paymentMethod"
                v-model="application.paymentMethod"
                class="select"
                :class="{ 'border-red-500': errors.paymentMethod }"
                required
              >
                <option value="">Select payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              <p v-if="errors.paymentMethod" class="mt-1 text-sm text-red-600">
                {{ errors.paymentMethod }}
              </p>
            </div>

            <!-- Credit Card Fields (shown conditionally) -->
            <div
              v-if="
                application.paymentMethod === 'creditCard' ||
                application.paymentMethod === 'debitCard'
              "
              class="space-y-4"
            >
              <div>
                <label
                  for="cardNumber"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Card Number*</label
                >
                <input
                  type="text"
                  id="cardNumber"
                  v-model="application.cardNumber"
                  class="input"
                  :class="{ 'border-red-500': errors.cardNumber }"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
                <p v-if="errors.cardNumber" class="mt-1 text-sm text-red-600">
                  {{ errors.cardNumber }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="expiryDate"
                    class="block text-sm font-medium text-secondary-700 mb-1"
                    >Expiry Date*</label
                  >
                  <input
                    type="text"
                    id="expiryDate"
                    v-model="application.expiryDate"
                    class="input"
                    :class="{ 'border-red-500': errors.expiryDate }"
                    placeholder="MM/YY"
                    required
                  />
                  <p v-if="errors.expiryDate" class="mt-1 text-sm text-red-600">
                    {{ errors.expiryDate }}
                  </p>
                </div>

                <div>
                  <label
                    for="cvv"
                    class="block text-sm font-medium text-secondary-700 mb-1"
                    >CVV*</label
                  >
                  <input
                    type="text"
                    id="cvv"
                    v-model="application.cvv"
                    class="input"
                    :class="{ 'border-red-500': errors.cvv }"
                    placeholder="XXX"
                    required
                  />
                  <p v-if="errors.cvv" class="mt-1 text-sm text-red-600">
                    {{ errors.cvv }}
                  </p>
                </div>
              </div>

              <div>
                <label
                  for="cardholderName"
                  class="block text-sm font-medium text-secondary-700 mb-1"
                  >Cardholder Name*</label
                >
                <input
                  type="text"
                  id="cardholderName"
                  v-model="application.cardholderName"
                  class="input"
                  :class="{ 'border-red-500': errors.cardholderName }"
                  required
                />
                <p
                  v-if="errors.cardholderName"
                  class="mt-1 text-sm text-red-600"
                >
                  {{ errors.cardholderName }}
                </p>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="btn btn-primary px-8 py-3 text-base"
              :disabled="isSubmitting || !selectedProperty"
            >
              <span v-if="isSubmitting">Submitting...</span>
              <span v-else>Submit Application</span>
            </button>
            <p class="text-sm text-secondary-500">* Required fields</p>
          </div>
        </form>

        <!-- Success Message -->
        <div
          v-if="applicationSubmitted"
          class="mt-8 p-6 bg-green-50 text-green-700 rounded-md"
        >
          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span class="font-medium text-lg"
              >Application Submitted Successfully!</span
            >
          </div>
          <p class="mb-4">
            Thank you for submitting your application for
            {{ selectedProperty?.title }}. Your application has been received
            and is being processed.
          </p>
          <p class="mb-4">
            Application Reference Number:
            <span class="font-medium"
              >APP-{{ Math.floor(Math.random() * 10000) }}-{{
                new Date().getFullYear()
              }}</span
            >
          </p>
          <p>
            We will contact you within 2-3 business days regarding the status of
            your application. If you have any questions, please contact our
            office.
          </p>
          <div class="mt-6">
            <NuxtLink to="/" class="btn btn-primary">Return to Home</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Properties data
const properties = ref([
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "downtown",
    type: "apartment",
    price: 1800,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Spacious Family Home",
    location: "north",
    type: "house",
    price: 2500,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Luxury Waterfront Condo",
    location: "east",
    type: "condo",
    price: 3200,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    location: "downtown",
    type: "apartment",
    price: 1200,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Renovated Townhouse",
    location: "west",
    type: "townhouse",
    price: 2200,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1600,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]);

// Recently viewed properties (mock data)
const recentlyViewed = ref([
  {
    id: 3,
    title: "Luxury Waterfront Condo",
    price: 3200,
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 1800,
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]);

// Form state
const selectedPropertyId = ref("");
const selectedProperty = ref(null);
const errors = ref({});
const isSubmitting = ref(false);
const applicationSubmitted = ref(false);

// Application form data
const application = ref({
  // Personal Information
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  ssn: "",
  currentAddress: "",
  currentCity: "",
  currentState: "",
  currentZip: "",

  // Employment Information
  employer: "",
  position: "",
  income: "",
  employmentLength: "",
  employerContact: "",

  // Rental History
  currentLandlord: "",
  landlordPhone: "",
  rentalLength: "",
  reasonForMoving: "",

  // Additional Occupants
  additionalOccupants: [],

  // References
  reference1Name: "",
  reference1Phone: "",
  reference1Relationship: "",
  reference2Name: "",
  reference2Phone: "",
  reference2Relationship: "",

  // Additional Information
  hasPets: null,
  petDetails: "",
  isSmoker: null,
  additionalInfo: "",

  // Terms and Consent
  backgroundCheckConsent: false,
  termsConsent: false,

  // Payment Information
  paymentMethod: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardholderName: "",
});

// Check if property ID is in the URL query params
onMounted(() => {
  if (route.query.propertyId) {
    selectPropertyById(parseInt(route.query.propertyId));
  }
});

// Methods
const selectProperty = () => {
  if (selectedPropertyId.value) {
    const property = properties.value.find(
      (p) => p.id === parseInt(selectedPropertyId.value)
    );
    if (property) {
      selectedProperty.value = property;
    }
  }
};

const selectPropertyById = (id) => {
  const property = properties.value.find((p) => p.id === id);
  if (property) {
    selectedPropertyId.value = id.toString();
    selectedProperty.value = property;
  }
};

const addOccupant = () => {
  application.value.additionalOccupants.push({
    name: "",
    relationship: "",
    dob: "",
    phone: "",
  });
};

const removeOccupant = (index) => {
  application.value.additionalOccupants.splice(index, 1);
};

// Form validation
const validateForm = () => {
  const newErrors = {};

  // Validate property selection
  if (!selectedProperty.value) {
    newErrors.property = "Please select a property";
    return false;
  }

  // Basic validation for required fields
  // Personal Information
  if (!application.value.firstName.trim())
    newErrors.firstName = "First name is required";
  if (!application.value.lastName.trim())
    newErrors.lastName = "Last name is required";
  if (!application.value.email.trim()) newErrors.email = "Email is required";
  if (!application.value.phone.trim())
    newErrors.phone = "Phone number is required";
  if (!application.value.dob) newErrors.dob = "Date of birth is required";
  if (!application.value.ssn.trim()) newErrors.ssn = "SSN is required";
  if (!application.value.currentAddress.trim())
    newErrors.currentAddress = "Current address is required";

  // Employment Information
  if (!application.value.employer.trim())
    newErrors.employer = "Employer name is required";
  if (!application.value.position.trim())
    newErrors.position = "Position is required";
  if (!application.value.income) newErrors.income = "Income is required";
  if (!application.value.employmentLength)
    newErrors.employmentLength = "Employment length is required";

  // Rental History
  if (!application.value.currentLandlord.trim())
    newErrors.currentLandlord = "Landlord name is required";
  if (!application.value.landlordPhone.trim())
    newErrors.landlordPhone = "Landlord phone is required";
  if (!application.value.rentalLength)
    newErrors.rentalLength = "Rental length is required";
  if (!application.value.reasonForMoving.trim())
    newErrors.reasonForMoving = "Reason for moving is required";

  // References
  if (!application.value.reference1Name.trim())
    newErrors.reference1Name = "Reference name is required";
  if (!application.value.reference1Phone.trim())
    newErrors.reference1Phone = "Reference phone is required";
  if (!application.value.reference1Relationship.trim())
    newErrors.reference1Relationship = "Relationship is required";
  if (!application.value.reference2Name.trim())
    newErrors.reference2Name = "Reference name is required";
  if (!application.value.reference2Phone.trim())
    newErrors.reference2Phone = "Reference phone is required";
  if (!application.value.reference2Relationship.trim())
    newErrors.reference2Relationship = "Relationship is required";

  // Additional Information
  if (application.value.hasPets === null)
    newErrors.hasPets = "Please select an option";
  if (application.value.hasPets && !application.value.petDetails.trim())
    newErrors.petDetails = "Pet details are required";
  if (application.value.isSmoker === null)
    newErrors.isSmoker = "Please select an option";

  // Terms and Consent
  if (!application.value.backgroundCheckConsent)
    newErrors.backgroundCheckConsent = "You must consent to a background check";
  if (!application.value.termsConsent)
    newErrors.termsConsent = "You must agree to the terms";

  // Payment Information
  if (!application.value.paymentMethod)
    newErrors.paymentMethod = "Payment method is required";

  if (
    application.value.paymentMethod === "creditCard" ||
    application.value.paymentMethod === "debitCard"
  ) {
    if (!application.value.cardNumber.trim())
      newErrors.cardNumber = "Card number is required";
    if (!application.value.expiryDate.trim())
      newErrors.expiryDate = "Expiry date is required";
    if (!application.value.cvv.trim()) newErrors.cvv = "CVV is required";
    if (!application.value.cardholderName.trim())
      newErrors.cardholderName = "Cardholder name is required";
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

// Form submission
const submitApplication = async () => {
  if (!validateForm()) {
    // Scroll to the first error
    const firstError = document.querySelector(".border-red-500");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    applicationSubmitted.value = true;

    // Scroll to success message
    setTimeout(() => {
      const successMessage = document.querySelector(".bg-green-50");
      if (successMessage) {
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  } catch (error) {
    console.error("Error submitting application:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
