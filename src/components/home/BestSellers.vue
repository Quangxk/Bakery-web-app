<template>
  <ul class="bestseller">
    <li class="item" v-for="item in BestSellers.items" :key="item.name">
      <base-item
        :itemName="item.name"
        :price="item.price"
        :itemLink="item.link"
      ></base-item>
    </li>
  </ul>
</template>
<script lang="ts">
import { useBestSellers } from "../../stores/BestSellers";
export default {
  setup() {
    const BestSellers = useBestSellers();

    return { BestSellers };
  },
};
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
