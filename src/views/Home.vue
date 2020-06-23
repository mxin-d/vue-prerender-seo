<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  metaInfo: {
    title: "Home", // set a title
    meta: [
      {
        // set meta
        name: "description",
        content: "My Example App"
      }
    ]
  },
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
