<template>
  <div class="item">
    <div class="wrapper">
      <img class="image" :src="itemLink" height="250" width="300" />
      <button>Add to cart</button>
    </div>
    <p>{{ itemName }}</p>
    <p>{{ price }}</p>
  </div>
</template>
<script lang="ts">
export default {
  props: ["itemName", "price", "itemLink"],
};
</script>
<style scoped>
.item {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 50px;
}
.image {
  object-fit: cover;
}
button {
  display: none;
}
</style>
