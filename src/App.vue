<script>
import { RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";

export default {
  components: {
    RouterView,
    MainHeader,
  },
};
</script>

<template>
  <MainHeader />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
