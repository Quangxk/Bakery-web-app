<template>
  <base-page :items="homemade" :pastry="true"></base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";

const all = useProduct();
const homemade = all.items.filter((item) =>
  item.categories.includes("homemade")
);
</script>
