<template>
  <div class="wrapper">
    <img :src="link" height="250" width="300" />
    <div class="description">
      <p>{{ name }}</p>
      <p>{{ desc }}</p>
      <p>{{ price }}</p>
      <white-button to="">Add To Cart ${{ price }}</white-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ["name", "price", "desc", "link"],
};
</script>
<style scoped></style>
