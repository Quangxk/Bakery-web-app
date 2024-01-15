<template>
  <div class="wrapper">
    <img :src="link" height="250" width="300" />
    <div class="description">
      <p>{{ name }}</p>
      <p>{{ desc }}</p>
      <white-button to="">Add To Cart ${{ price }}</white-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ["name", "price", "desc", "link", "id"],
};
</script>
<style scoped>
.wrapper {
  padding: 100px;
  display: flex;
  justify-content: center;
}
img {
  object-fit: cover;
  border-radius: 10%;
}
</style>
