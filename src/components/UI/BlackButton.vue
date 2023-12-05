<template>
  <router-link :to="to">
    <slot></slot>
  </router-link>
</template>
<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
a {
  color: white;
  background-color: black;
  font-size: 10px;
  position: relative;
  display: inline-block;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 50px;
  border: 1px solid black;
  z-index: 1;
}
a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: white;
  transition: 0.5s;
  z-index: -1;
}
a:hover:before {
  width: 100%;
}
a:hover {
  color: black;
}
</style>
