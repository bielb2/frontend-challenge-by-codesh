import { createApp } from "vue";

const HomeProps = {
  data() {
    return {
      message: "Hello world",
    };
  },
};

createApp(HomeProps).mount("#test");
