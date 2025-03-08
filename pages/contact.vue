<template>
  <div class="bg-secondary-50 min-h-screen">
    <!-- Hero Section -->
    <div class="relative bg-primary-600 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f6,transparent_40%)]"
        ></div>
        <div
          class="absolute bottom-0 left-0 bg-[radial-gradient(circle_at_bottom_left,#0ea5e9,transparent_40%)]"
        ></div>
      </div>
      <div class="container mx-auto px-4 py-20 relative z-10">
        <h1 class="text-4xl md:text-5xl text-primary/80 font-bold mb-4">Get in Touch</h1>
        <p class="text-xl md:text-2xl text-primary/80 max-w-2xl opacity-90">
          We're here to help with any questions about our properties or
          services.
        </p>
      </div>

      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="#f9fafb"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Contact Info Cards -->
    <div class="container mx-auto px-4 -mt-16 mb-16 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4"
          >
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
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Visit Us</h3>
          <address class="not-italic text-secondary-600">
            <p>123 Property Street</p>
            <p>Newark, NJ 07102</p>
            <p>United States</p>
          </address>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4"
          >
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
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Call Us</h3>
          <p class="text-secondary-600 mb-1">Main: (555) 123-4567</p>
          <p class="text-secondary-600 mb-1">Support: (555) 987-6543</p>
          <p class="text-secondary-600">Fax: (555) 456-7890</p>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4"
          >
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
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Email Us</h3>
          <p class="text-secondary-600 mb-1">info@propertyportal.com</p>
          <p class="text-secondary-600 mb-1">support@propertyportal.com</p>
          <p class="text-secondary-600">careers@propertyportal.com</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Contact Form -->
        <div
          class="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div class="flex flex-col md:flex-row">
            <!-- Form Side -->
            <div class="flex-1 p-8 md:p-10">
              <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-secondary-700 mb-1"
                      >First Name*</label
                    >
                    <input
                      type="text"
                      id="firstName"
                      placeholder="first name"
                      v-model="form.firstName"
                      class="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      :class="{
                        'border-red-500 focus:ring-red-500': errors.firstName,
                      }"
                      required
                    />
                    <p
                      v-if="errors.firstName"
                      class="mt-1 text-sm text-red-600"
                    >
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
                      placeholder="last name"
                      v-model="form.lastName"
                      class="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      :class="{
                        'border-red-500 focus:ring-red-500': errors.lastName,
                      }"
                      required
                    />
                    <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                      {{ errors.lastName }}
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-secondary-700 mb-1"
                    >Email Address*</label
                  >
                  <input
                    type="email"
                    id="email"
                    placeholder="name@gmail.com"
                    v-model="form.email"
                    class="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    :class="{
                      'border-red-500 focus:ring-red-500': errors.email,
                    }"
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
                    >Phone Number</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    placeholder="enter your number"
                    v-model="form.phone"
                    class="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    :class="{
                      'border-red-500 focus:ring-red-500': errors.phone,
                    }"
                  />
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
                    {{ errors.phone }}
                  </p>
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-secondary-700 mb-1"
                    >Subject*</label
                  >
                  <input
                    type="text"
                    id="subject"
                    placeholder="subect"
                    v-model="form.subject"
                    class="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    :class="{
                      'border-red-500 focus:ring-red-500': errors.subject,
                    }"
                    required
                  />
                  <p v-if="errors.subject" class="mt-1 text-sm text-red-600">
                    {{ errors.subject }}
                  </p>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-secondary-700 mb-1"
                    >Message*</label
                  >
                  <textarea
                    id="message"
                    placeholder="message..."
                    v-model="form.message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    :class="{
                      'border-red-500 focus:ring-red-500': errors.message,
                    }"
                    required
                  ></textarea>
                  <p v-if="errors.message" class="mt-1 text-sm text-red-600">
                    {{ errors.message }}
                  </p>
                </div>

                <div>
                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      v-model="form.consent"
                      class="mt-1 mr-2"
                      required
                    />
                    <span class="text-sm text-secondary-700">
                      I consent to PropertyPortal collecting and storing my data
                      from this form to respond to my inquiry. I understand my
                      data will be processed in accordance with the Privacy
                      Policy.*
                    </span>
                  </label>
                  <p v-if="errors.consent" class="mt-1 text-sm text-red-600">
                    {{ errors.consent }}
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="flex items-center">
                      <svg
                        class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                    <span v-else>Send Message</span>
                  </button>
                </div>
              </form>

              <!-- Success Message -->
              <div
                v-if="formSubmitted"
                class="mt-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-100 flex items-start"
              >
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
                  class="mr-3 flex-shrink-0 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <h4 class="font-medium">Thank you for your message!</h4>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Office Hours & FAQ -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Office Hours -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mr-4"
              >
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 class="text-xl font-bold">Office Hours</h3>
            </div>

            <div class="space-y-3">
              <div
                class="flex justify-between items-center pb-2 border-b border-secondary-100"
              >
                <span class="font-medium">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div
                class="flex justify-between items-center pb-2 border-b border-secondary-100"
              >
                <span class="font-medium">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div
                class="flex justify-between items-center pb-2 border-b border-secondary-100"
              >
                <span class="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mr-4"
              >
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
              </div>
              <h3 class="text-xl font-bold">Frequently Asked Questions</h3>
            </div>

            <div class="space-y-4">
              <div
                class="border border-secondary-200 rounded-lg overflow-hidden"
              >
                <button
                  @click="toggleFaq(1)"
                  class="flex justify-between items-center w-full p-4 text-left font-medium bg-white hover:bg-secondary-50 transition-colors"
                >
                  <span>How quickly can I expect a response?</span>
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
                    class="transition-transform duration-300"
                    :class="{ 'rotate-180': faqOpen === 1 }"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  v-if="faqOpen === 1"
                  class="p-4 bg-secondary-50 text-text-light border-t border-secondary-200"
                >
                  We strive to respond to all inquiries within 24 business
                  hours. For urgent matters, we recommend calling our office
                  directly.
                </div>
              </div>

              <div
                class="border border-secondary-200 rounded-lg overflow-hidden"
              >
                <button
                  @click="toggleFaq(2)"
                  class="flex justify-between items-center w-full p-4 text-left font-medium bg-white hover:bg-secondary-50 transition-colors"
                >
                  <span>How do I schedule a property viewing?</span>
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
                    class="transition-transform duration-300"
                    :class="{ 'rotate-180': faqOpen === 2 }"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  v-if="faqOpen === 2"
                  class="p-4 bg-secondary-50 text-text-light border-t border-secondary-200"
                >
                  You can schedule a property viewing directly through our
                  website by visiting the property details page and clicking on
                  "Schedule a Tour," or you can contact our office to arrange a
                  viewing.
                </div>
              </div>

              <div
                class="border border-secondary-200 rounded-lg overflow-hidden"
              >
                <button
                  @click="toggleFaq(3)"
                  class="flex justify-between items-center w-full p-4 text-left font-medium bg-white hover:bg-secondary-50 transition-colors"
                >
                  <span>What information do I need for applying?</span>
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
                    class="transition-transform duration-300"
                    :class="{ 'rotate-180': faqOpen === 3 }"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  v-if="faqOpen === 3"
                  class="p-4 bg-secondary-50 text-text-light border-t border-secondary-200"
                >
                  When applying for a property, you'll need to provide personal
                  information, employment details, income verification, rental
                  history, and references. You may also need to consent to a
                  background and credit check.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Form state
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
});

const errors = ref({});
const isSubmitting = ref(false);
const formSubmitted = ref(false);
const faqOpen = ref(null);

// Form validation
const validateForm = () => {
  const newErrors = {};

  if (!form.value.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }

  if (!form.value.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }

  if (!form.value.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (form.value.phone && !/^[0-9\-$$$$\s]+$/.test(form.value.phone)) {
    newErrors.phone = "Please enter a valid phone number";
  }

  if (!form.value.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!form.value.message.trim()) {
    newErrors.message = "Message is required";
  }

  if (!form.value.consent) {
    newErrors.consent = "You must consent to our privacy policy";
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    };

    formSubmitted.value = true;

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    isSubmitting.value = false;
  }
};

// FAQ toggle
const toggleFaq = (id) => {
  faqOpen.value = faqOpen.value === id ? null : id;
};
</script>
