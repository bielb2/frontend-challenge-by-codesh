<script>
import Button from "primevue/button";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Button,
    HelloWorld,
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
  <main id="test">
    <Button
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

    <HelloWorld compEmail="asad@asd.com" :isOpen="false" />
    <!-- <HelloWorld :compEmail="msg" /> -->

    <!-- <form @submit="asdf($event)"> -->
    <!-- <form @submit.prevent="asdf"> -->
    <!-- <input type="text" v-model="msg" /> -->
    <!-- <button @click="one(txt, $event), second(txt2, $event)" v-show="disabled">  -->
  </main>
</template>
