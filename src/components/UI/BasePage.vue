<template>
  <div class="wrapper">
    <div class="image"></div>
    <div class="nav">
      <router-link class="title" to="">All Products</router-link>
      <router-link class="title" to="">Best Sellers</router-link>
      <router-link class="title" to="">Holiday Gifts</router-link>
      <router-link class="title" to="">Homemade</router-link>
    </div>
    <div>
      <ul class="item">
        <li v-for="item in all" :key="item.id">
          <base-item
            :itemName="item.name"
            :price="item.price"
            :itemLink="item.link"
            :id="item.id"
            :category="item.category"
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
    console.log(all);
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
.nav {
  display: flex;
  justify-content: center;
}
.title {
  margin-left: 50px;
  margin-top: 50px;
}
</style>
