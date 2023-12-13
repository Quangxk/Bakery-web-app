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
import { Item } from "../../stores/Product";
import { useProduct } from "../../stores/Product";
import { useRoute } from "vue-router";
export default {
  setup() {
    const all = useProduct();
    const { items } = storeToRefs(all);
    const route = useRoute();
    const item = items.value.find(
      (item) => item.id.toString() === route.params.id
    ) as Item;
    console.log(item);
    return {
      items,
      item,
    };
  },
};
</script>
<style scoped></style>
