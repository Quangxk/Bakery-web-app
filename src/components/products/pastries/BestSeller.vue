<template>
  <base-page :items="bestSeller" :pastry="true"> </base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";
const all = useProduct();

const bestSeller = all.items.filter((item) =>
  item.categories.includes("bestseller")
);
</script>
