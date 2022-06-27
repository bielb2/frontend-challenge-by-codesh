<script>
import Avatar from "primevue/avatar";
import image from "@/assets/img/companyLogo.jpg";

export default {
  name: "MainHeader",
  components: {
    Avatar,
  },
  data() {
    return {
      image: image,
    };
  },
};
</script>

<template>
  <header
    class="flex w-full flex align-items-center justify-content-between p-3 bg-white shadow-1"
  >
    <div class="flex align-items-center">
      <Avatar
        alt="Vue logo"
        :image="image"
        shape="circle"
        size="large"
        class="cursor-pointer"
      />
      <h1 class="ml-4">Company</h1>
    </div>

    <div>
      <Avatar
        alt="Vue logo"
        icon="pi pi-user"
        shape="circle"
        size="large"
        class="surface-200 cursor-pointer transition-duration-100 hover:surface-100 text-800"
      />
    </div>
  </header>
</template>
