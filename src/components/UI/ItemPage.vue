<template>
  <div class="wrapper">
    <img :src="link" />
    <div class="description">
      <p>{{ name }}</p>
      <p>{{ desc }}</p>
      <p>{{ price }}</p>
      <white-button>Add To Cart</white-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ["name", "price", "desc", "link"],
};
</script>
<style scoped></style>
