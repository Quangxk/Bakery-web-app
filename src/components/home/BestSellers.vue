<template>
  <ul v-for="item in itemStore.items" :key="item.name">
    <li>
      <base-item :itemName="item.name" :price="item.price"></base-item>
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
<style scoped></style>
