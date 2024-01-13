<template>
  <div class="wrapper">
    <div class="image"></div>
    <div class="nav" v-if="pastry">
      <router-link class="title" to="/pastries/all">All Products</router-link>
      <router-link class="title" to="/pastries/bestseller"
        >Best Sellers</router-link
      >
      <router-link class="title" to="/pastries/holiday"
        >Holiday Gifts</router-link
      >
      <router-link class="title" to="/pastries/homemade"
        >Bake At Home</router-link
      >
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
  pastry: {
    required: true,
    type: Boolean,
  },
});
import { PropType, defineProps } from "vue";
import { Item } from "../../stores/Product";
</script>
<style scoped>
* {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
}
.items {
  margin-left: 135px;
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
