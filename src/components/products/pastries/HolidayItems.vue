<template>
  <base-page :items="holiday" :pastry="true"></base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";
const all = useProduct();
const holiday = all.items.filter((item) => item.categories.includes("holiday"));
</script>
