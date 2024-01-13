<template>
  <header>
    <nav>
      <div style="display: flex">
        <router-link to="/home" class="logo nav-item">Home</router-link>
        <div class="nav-item">
          <router-link to="/pastries/all" href="#">Pastry</router-link>
        </div>
        <div class="nav-item">
          <a href="#">Drinks</a>
        </div>
        <transition name="cat"> </transition>

        <div class="nav-item"><a href="#">Location</a></div>
        <div class="nav-item">
          <a href="#">About us</a>
        </div>
      </div>
      <div>
        <a @click="setSearchBar" class="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path
              fill="#f7f7f8"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </a>
        <router-link to="/account/login" class="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path
              fill="#fcfcfd"
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
        </router-link>
        <router-link to="/account/login" class="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <path
              fill="#ffffff"
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
        </router-link>
      </div>
    </nav>
    <search-bar v-if="searchBar"></search-bar>
  </header>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
import SearchBar from "./SearchBar.vue";
import { ref } from "vue";
export default {
  components: {
    SearchBar,
    RouterLink,
  },
  setup() {
    const searchBar = ref(false);
    const setSearchBar = () => {
      searchBar.value = !searchBar.value;
    };
    return {
      searchBar,
      setSearchBar,
    };
  },
};
</script>
<style scoped>
/* header {
  position: fixed;
} */
* {
  text-transform: uppercase;
}
header {
  z-index: 2;
  align-items: center;
}
a {
  color: whitesmoke;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-size: auto;
  background-image: url("https://www.viedefrance.co.jp/delifrance/assets/img/top/bg_sand.png");
}
a {
  text-decoration: none;
}
.nav-item:hover {
  transform: scale(1.2);
}
.nav-item {
  margin-right: 80px;
  /* padding: 25px 25px 25px 25px; */
  cursor: pointer;
  transition: 0.5s;
  border: transparent;
}
svg:hover {
  transition: 0.5s;
  transform: scale(1.5);
}
.icon {
  margin-left: 50px;
}
</style>
