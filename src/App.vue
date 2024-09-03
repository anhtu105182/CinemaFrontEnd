<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <!-- <Homepage /> -->
    <!-- <ComingSoonMovie /> -->
    <!-- <news /> -->
    <!-- <NewsActive /> -->
    <!-- <NewsVideo /> -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
// import Homepage from '@/components/Homepage.vue'
// import ComingSoonMovie from '@/views/ComingSoonMovie.vue';
// import news from '@/views/news.vue';
// import NewsActive from '@/views/NewsActive.vue';
// import NewsVideo from '@/views/NewsVideo.vue';


import AppFooter from '@/components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    // Homepage,
    // ComingSoonMovie,
    // news,
    // NewsActive,
    // NewsVideo,
    AppFooter
  }
};
</script>

<style>
/* Các style chung cho ứng dụng */
</style>

comingSoonMovie