<template>
  <base-page :items="all" :pastry="false" :url="url" :text="text"></base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../stores/Product";
const all = useProduct().items.filter((item) => item.type.includes("drinks"));
const url =
  "https://themediator-group.com/PhotosThe_Mediator_Group/coffee-and-tea.jpg";
const text = "test";
</script>
