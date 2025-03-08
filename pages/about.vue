<template>
  <div class="bg-secondary-50 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div class="relative">
          <img
            src="/Banner.webp"
            alt="About Tenant Properties"
            class="w-full h-64 md:h-80 object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70 flex items-center"
          >
            <div class="container mx-auto px-4">
              <div class="bg-black/50 p-4 rounded-lg text-center">
                <h1
                  class="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md"
                >
                Tenant Properties
                </h1>
                <p
                  class="text-white font-bold text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md"
                >
                  We're on a mission to make property management and renting
                  simple, transparent, and efficient for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Story Section -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-12">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">
            Our Story
          </h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-text-light mb-4">
              Founded in 2015, Tenant Properties began with a simple idea: make
              renting properties as easy as ordering a ride or food delivery.
              Our founders, having experienced the frustrations of traditional
              property management firsthand, set out to create a platform that
              would revolutionize the industry.
            </p>
            <p class="text-text-light mb-4">
              What started as a small startup with just a handful of properties
              has grown into a comprehensive property management solution
              serving thousands of landlords and tenants across the country. Our
              platform has evolved based on feedback from our users, always
              keeping the focus on creating a seamless experience for both
              property owners and renters.
            </p>
            <p class="text-text-light">
              Today, Tenant Properties is proud to be at the forefront of the
              digital transformation in real estate, combining cutting-edge
              technology with personalized service to make property management
              and renting simpler, more transparent, and more efficient than
              ever before.
            </p>
          </div>
        </div>
      </div>

      <!-- Our Mission Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-text-light mb-4">
            Our mission is to transform the property rental experience through
            technology and exceptional service. We believe that finding and
            managing rental properties should be straightforward, transparent,
            and stress-free.
          </p>
          <p class="text-text-light">
            We're committed to providing tools that empower landlords to manage
            their properties efficiently while giving tenants the resources they
            need to find their perfect home and enjoy a positive rental
            experience.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Our Values</h2>
          <ul class="space-y-4">
            <li class="flex items-start">
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
                class="text-primary-600 mr-2 mt-1"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h3 class="font-semibold">Transparency</h3>
                <p class="text-text-light">
                  We believe in clear communication and honest business
                  practices.
                </p>
              </div>
            </li>
            <li class="flex items-start">
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
                class="text-primary-600 mr-2 mt-1"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h3 class="font-semibold">Innovation</h3>
                <p class="text-text-light">
                  We continuously improve our platform to meet evolving needs.
                </p>
              </div>
            </li>
            <li class="flex items-start">
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
                class="text-primary-600 mr-2 mt-1"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h3 class="font-semibold">Accessibility</h3>
                <p class="text-text-light">
                  We make property management and renting accessible to
                  everyone.
                </p>
              </div>
            </li>
            <li class="flex items-start">
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
                class="text-primary-600 mr-2 mt-1"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h3 class="font-semibold">Community</h3>
                <p class="text-text-light">
                  We foster positive relationships between landlords and
                  tenants.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Team Section -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
          Meet Our Leadership Team
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="/sarah-johnson.webp"
                alt="Sarah Johnson"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-lg">Sarah Johnson</h3>
            <p class="text-primary-600 mb-2">CEO & Co-Founder</p>
            <p class="text-text-light text-sm">
              Former real estate executive with 15+ years of experience in
              property management.
            </p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="/michael.webp"
                alt="Michael Chen"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-lg">Michael Chen</h3>
            <p class="text-primary-600 mb-2">CTO & Co-Founder</p>
            <p class="text-text-light text-sm">
              Tech innovator with a background in developing scalable platforms.
            </p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="/olivia.webp"
                alt="Olivia Martinez"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-lg">Olivia Martinez</h3>
            <p class="text-primary-600 mb-2">COO</p>
            <p class="text-text-light text-sm">
              Operations expert who streamlines processes for maximum
              efficiency.
            </p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="/David.webp"
                alt="David Wilson"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-lg">David Wilson</h3>
            <p class="text-primary-600 mb-2">Head of Customer Success</p>
            <p class="text-text-light text-sm">
              Dedicated to ensuring positive experiences for all platform users.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-primary-600 rounded-lg shadow-md p-8 mb-12 text-white">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div class="text-4xl text-black font-bold mb-2">5,000+</div>
            <div class="text-primary-dark">Properties Managed</div>
          </div>
          <div>
            <div class="text-4xl text-black font-bold mb-2">10,000+</div>
            <div class="text-primary-dark">Happy Tenants</div>
          </div>
          <div>
            <div class="text-4xl text-black font-bold mb-2">1,500+</div>
            <div class="text-primary-dark">Property Owners</div>
          </div>
          <div>
            <div class="text-4xl text-black font-bold mb-2">25+</div>
            <div class="text-primary-dark">Cities Served</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 class="text-2xl font-bold mb-4">
          Ready to Experience Better Property Management?
        </h2>
        <p class="text-text-light mb-6 max-w-2xl mx-auto">
          Whether you're a property owner looking for efficient management tools
          or a tenant searching for your next home, we're here to help.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/properties" class="btn btn-primary"
            >Browse Properties</NuxtLink
          >
          <NuxtLink to="/contact" class="btn btn-outline">Contact Us</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
