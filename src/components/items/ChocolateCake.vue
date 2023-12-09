<template>
  <item-page :name="cake.name" :price="cake.price"></item-page>
</template>
<script lang="ts">
import { storeToRefs } from "pinia";
import { useAllProduct } from "../../stores/AllProduct";
import { useRoute } from "vue-router";
export default {
  setup() {
    const allProductStore = useAllProduct();
    const { items } = storeToRefs(allProductStore);
    const route = useRoute();
    const cake = items.value.find((item) => item.name === route.params.id);
    return {
      items,cake
    };
  },
};
</script>
<style scoped></style>
