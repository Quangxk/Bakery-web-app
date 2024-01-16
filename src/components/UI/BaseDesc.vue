<template>
  <div class="wrapper">
    <img :src="link" height="400" width="500" />
    <div class="description">
      <ul class="titles" v-if="category.length != 0">
        <li v-for="title in category" :key="title">{{ title }}</li>
      </ul>
      <p class="name">{{ name }}</p>
      <p>{{ desc }}</p>
      <black-button class="button" to="">Add To Cart ${{ price }}</black-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ["name", "price", "desc", "link", "id", "category"],
};
</script>
<style scoped>
body {
}
.wrapper {
  padding: 100px;
  display: flex;
  justify-content: space-around;
}
img {
  object-fit: cover;
  border-radius: 10%;
}
.description {
  padding: 50px;
  width: 500px;
  line-height: 22px;
  font-size: 14px;
  font-family: "Baskervville", serif;
  margin-left: 5px;
}
.name {
  font-size: 30px;
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 300;
}
.button {
  margin-top: 50px;
  font-size: 14px;
}

img:hover {
  transform: scale(1.2);
  transition: 0.5s;
}
.titles {
  text-indent: 5px;
  display: flex;
  font-weight: bold;
  font-family: "Sweet Sans Pro", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
}
.titles li {
  margin-right: 10px;
  margin-bottom: 5px;
  letter-spacing: 0.2rem;
  border-right: 1px solid black;
}
li {
  list-style: none;
}
</style>
