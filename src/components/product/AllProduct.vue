<template>
  <base-page :items="all"> </base-page>
</template>
<script setup lang="ts">
import { useProduct } from "@/stores/Product";
const all = useProduct().items;
</script>
