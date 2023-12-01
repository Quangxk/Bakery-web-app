<template>
  <div class="dropdown">
    <ul v-for="category in categories" :key="category.title">
      <li>
        <a :href="category.link" class="category"> {{ category.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const categories = [
      {
        title: "Best Sellers",
        link: "#",
      },
      {
        title: "All Products",
        link: "#",
      },
      {
        title: "Birthday",
        link: "#",
      },
      {
        title: "Holiday Gifts",
        link: "#",
      },
      {
        title: "Homemade",
        link: "#",
      },
      {
        title: "Corporate Giftings",
        link: "#",
      },
    ];

    return { categories };
  },
};
</script>
<style scoped>
.category {
  text-decoration: none;
  margin-left: 170px;
}
.dropdown {
  display: flex;
  width: 100vw;
  background-color: beige;
  position: absolute;
  top: 100px;
}
li {
  margin-bottom: 30px;
  margin-top: 30px;
  list-style: none;
  cursor: pointer;
}
a:hover {
  border-bottom: solid 2px black;
}
</style>
