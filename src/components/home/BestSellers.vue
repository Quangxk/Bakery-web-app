<template>
  <ul class="bestseller">
    <li class="item" v-for="item in result" :key="item.name">
      <base-item
        class="item"
        :itemName="item.name"
        :price="item.price"
        :itemLink="item.link"
        :id="item.id"
      ></base-item>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useProduct } from "../../stores/Product";
const all = useProduct();
const result = all.items.filter((item) =>
  item.categories.includes("bestseller")
);
console.log(result);
</script>
<style scoped>
.bestseller {
  display: flex;
}
.item {
  list-style: none;
  margin-left: 19px;
  margin-right: 19px;
}
</style>
