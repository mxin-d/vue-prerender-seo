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
    // set a title
    title: "Home",
    // set meta
    meta: [
      {
        name: "keyword",
        content: "My Example Keyword"
      }
    ],
    // set link
    link: [
      {
        rel: "asstes",
        href: "https://xxx.com/"
      }
    ]
  },
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
