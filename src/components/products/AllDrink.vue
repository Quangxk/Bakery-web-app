<template>
  <base-page :items="all" :pastry="false"></base-page>
</template>
<script setup lang="ts">
import { useDrink } from "../../stores/Drink";
const all = useDrink().items;
</script>
