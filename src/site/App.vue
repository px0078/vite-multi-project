<template>
  <img alt="Vue logo" :src="Img" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Img from "@/site/assets/logo.png";

console.log("img", Img);

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    return { Img };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
