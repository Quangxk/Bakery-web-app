<template>
  <ul class="bestseller">
    <li class="item" v-for="item in itemStore.items" :key="item.name">
      <base-item
        :itemName="item.name"
        :price="item.price"
        :itemLink="item.link"
      ></base-item>
    </li>
  </ul>
</template>
<script lang="ts">
import { useItemStore } from "../../stores/ItemStore";
export default {
  setup() {
    const itemStore = useItemStore();

    return { itemStore };
  },
};
</script>
<style scoped>
.bestseller {
  display: flex;
  justify-content: space-around;
}
.item {
  list-style: none;
}
</style>
