<template>
  <base-page :items="all" :pastry="true" :url="url" :text="text"> </base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";
const all = useProduct().items.filter((item) => item.type.includes("pastries"));
const url = "https://tradeways.pk/wp-content/uploads/2020/11/bakery_item.jpg";
const text = "test";
</script>
