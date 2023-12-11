<template>
  <base-desc
    :name="item.name"
    :price="item.price"
    :link="item.link"
    :desc="item.description"
  ></base-desc>
</template>
<script lang="ts">
import { storeToRefs } from "pinia";
import { Item } from "../../stores/AllProduct";
import { useAllProduct } from "../../stores/AllProduct";
export default {
  setup() {
    const allProductStore = useAllProduct();
    const { items } = storeToRefs(allProductStore);
    const item = items.value.find(
      (item) => item.name == "Chocolate Cake"
    ) as Item;
    return {
      items,
      item,
    };
  },
};
</script>
<style scoped></style>
