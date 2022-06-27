<script>
import Button from "primevue/Button";
import InputText from "primevue/InputText";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    Button,
    HelloWorld,
    InputText,
  },
  data() {
    return {
      msg: "Hello Vite!",
      front_end: ["JS", "React", "Vue"],
      backend: [
        {
          id: 1,
          language: "Python",
        },
        {
          id: 2,
          language: "PHP",
        },
        {
          id: 3,
          language: "Node",
        },
        {
          id: 4,
          language: "Go",
        },
      ],
    };
  },
  methods: {
    teste() {
      this.msg = "Hello ASDF";
    },
  },
  created() {},
  mounted() {},
};
</script>

<template>
  <main class="main mt-8">
    <div class="flex align-center justify-content-center flex-column">
      <div>
        <p class="text-900 line-height-3">
          Irure voluptate pariatur proident dolor voluptate ipsum. Est sunt quis
          dolor laborum ea est deserunt reprehenderit proident cillum. Consequat
          officia voluptate quis dolor commodo tempor voluptate labore id duis
          consequat nostrud nisi..
        </p>
      </div>

      <div class="w-full my-4">
        <span class="p-input-icon-right w-full shadow-1">
          <i class="pi pi-search" />
          <InputText
            class="w-full"
            type="text"
            v-model="value3"
            placeholder="Search"
          />
        </span>
      </div>
    </div>
    <!-- <Button
      icon="pi pi-check"
      iconPos="right"
      label="Primary"
      class="p-button-secondary"
      @click="teste"
      >{{ msg }}</Button
    >

    <ul>
      <li v-for="technology in front_end" :key="technology">
        {{ technology }}
      </li>
    </ul>
    <ul>
      <li v-for="technology in backend" :key="technology.id">
        {{ technology.language }}
      </li>
    </ul>

    <HelloWorld compEmail="asad@asd.com" :isOpen="false" /> -->
    <!-- <HelloWorld :compEmail="msg" /> -->

    <!-- <form @submit="asdf($event)"> -->
    <!-- <form @submit.prevent="asdf"> -->
    <!-- <input type="text" v-model="msg" /> -->
    <!-- <button @click="one(txt, $event), second(txt2, $event)" v-show="disabled">  -->
  </main>
</template>

<style scoped>
.main {
  max-width: 720px;
  margin: 0 auto;
}
</style>
