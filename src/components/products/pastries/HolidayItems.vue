<template>
  <base-page
    :items="holiday"
    :pastry="true"
    :url="url"
    :text="text"
  ></base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";
const all = useProduct();
const url =
  "https://www.virginexperiencedays.co.uk/content/img/product/large/b-bakery-christmas-themed-26101326.jpg";
const text = "test";
const holiday = all.items.filter((item) => item.categories.includes("holiday"));
</script>
