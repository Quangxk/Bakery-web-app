<template>
  <div class="wrapper">
    <div class="image"></div>
    <div class="nav">
      <router-link class="title" to="/products/all">All Products</router-link>
      <router-link class="title" to="/products/bestseller"
        >Best Sellers</router-link
      >
      <router-link class="title" to="">Holiday Gifts</router-link>
      <router-link class="title" to="">Homemade</router-link>
    </div>
    <div>
      <ul class="items">
        <li v-for="item in items" :key="item.id">
          <base-item
            :itemName="item.name"
            :price="item.price"
            :itemLink="item.link"
            :id="item.id"
            :category="item.categories"
          ></base-item>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  items: {
    required: true,
    type: Array as PropType<Item[]>,
  },
});
import { PropType, defineProps } from "vue";
import { Item } from "../../stores/Product";
</script>
<style scoped>
.items {
  margin-left: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
}
li {
  list-style: none;
}
.nav {
  margin-right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  margin-left: 80px;
  margin-top: 50px;
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -105%;
  background: red;
  transform: scale(0, 1);
  transform-origin: 0% 100%;
  transition: transform 0.8s ease;
}
.title:hover::after {
  transform: scale(1, 1);
}
a {
  text-decoration: none;
}
</style>
