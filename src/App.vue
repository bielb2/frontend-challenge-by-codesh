<script>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";

export default {
  components: {
    RouterView,
    RouterLink,
    MainHeader,
  },
};
</script>

<template>
  <MainHeader />

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav> -->
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
