<template>
  <div class="item">
    <p>{{ itemName }}</p>
    <div class="wrapper">
      <router-link :to="`/items/${id}`">
        <img class="image" :src="itemLink" height="250" width="300" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ["itemName", "price", "itemLink", "id"],
  setup() {
    return {};
  },
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
p {
  margin-bottom: 20px;
  display: flex;
  width: inherit;
  justify-content: center;
}
.image {
  border-radius: 10%;
  cursor: pointer;
  object-fit: cover;
  box-shadow: 2px 5px 5px gray;
}
.image:hover {
  opacity: 0.5;
  transition: 0.5s;
  overflow: hidden;
}
</style>
