<template>
  <html lang="en">
    <body :class="inter.className">
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </body>
  </html>
</template>

<script setup>
// import { Inter } from '@fontsource/inter';
import Header from '@/components/TheHeader.vue';
import Footer from '@/components/TheFooter.vue';

// Apply Inter font (Optional)
const inter = { className: 'font-inter' };
</script>

<style>
@import '@/assets/css/tailwind.css';
</style>
