<template>
  <link href="https://fonts.cdnfonts.com/css/sweet-sans-pro" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Baskervville&display=swap"
    rel="stylesheet"
  />
  <the-header class="header"></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Sweet Sans Pro", sans-serif;
}

.header {
  position: sticky;
  top: 0;
}
</style>
