<template>
  <base-page :items="all" :pastry="false" :url="url" :text="text"></base-page>
</template>
<script setup lang="ts">
import { useDrink } from "../../stores/Drink";
const all = useDrink().items;
const url =
  "https://themediator-group.com/PhotosThe_Mediator_Group/coffee-and-tea.jpg";
const text = "test";
</script>
