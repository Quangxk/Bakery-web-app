<template>
  <item-page
    :name="cake.name"
    :price="cake.price"
    :link="cake.link"
    :desc="cake.description"
  ></item-page>
</template>
<script lang="ts">
import { storeToRefs } from "pinia";
import { Cake } from "../../stores/AllProduct";
import { useAllProduct } from "../../stores/AllProduct";
export default {
  setup() {
    const allProductStore = useAllProduct();
    const { items } = storeToRefs(allProductStore);
    const cake = items.value.find(
      (item) => item.name == "Chocolate Cake"
    ) as Cake;
    return {
      items,
      cake,
    };
  },
};
</script>
<style scoped></style>
