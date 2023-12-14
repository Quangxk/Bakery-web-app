<template>
  <div class="wrapper">
    <div class="image"></div>
    <div class="nav"></div>
    <div>
      <ul class="item">
        <li v-for="item in all" :key="item.id">
          <base-item
            :itemName="item.name"
            :price="item.price"
            :itemLink="item.link"
            :id="item.id"
            :isbest="item.isBestseller"
          ></base-item>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { useProduct } from "../../stores/Product";
export default {
  setup() {
    const all = useProduct().items;
    return {
      all,
    };
  },
};
</script>
<style scoped>
.item {
  margin-left: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
}
li {
  list-style: none;
}
</style>
