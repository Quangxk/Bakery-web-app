<template>
  <base-desc
    :name="item.name"
    :price="item.price"
    :link="item.link"
    :desc="item.description"
    :category="item.categories"
  ></base-desc>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Item } from "../../stores/Product";
import { useProduct } from "../../stores/Product";
import { useRoute } from "vue-router";
const all = useProduct();
const { items } = storeToRefs(all);
const route = useRoute();
const item = items.value.find(
  (item) => item.id.toString() === route.params.id
) as Item;
</script>
<style scoped></style>
