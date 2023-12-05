<template>
  <header>
    <nav>
      <router-link to="/home" class="logo nav-item">Logo</router-link>
      <div class="nav-item"><a href="#">Local Delivery/Pick Up</a></div>

      <div class="nav-item">
        <a href="#" @mouseover="setCatDropdown">Categories</a>
      </div>
      <transition name="cat">
        <categories-dropdown
          v-if="catDropdown"
          @mouseleave="setCatDropdown"
        ></categories-dropdown>
      </transition>

      <div class="nav-item"><a href="#">Corporate Gifting</a></div>
      <div class="nav-item">
        <a href="#" @mouseover="setCelDropdown" @mouseleave="setCelDropdown"
          >Celebrations</a
        >
      </div>
      <transition>
        <celebration-dropdown v-if="celDropdown"></celebration-dropdown>
      </transition>
      <div class="nav-item"><a href="#">Location</a></div>

      <div class="nav-item">
        <a @click="setSearchBar" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </a>
        <router-link to="/account/login" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
            />
          </svg>
        </router-link>
        <router-link to="/account/login" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
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
import CategoriesDropdown from "./CategoriesDropdown.vue";
import CelebrationDropdown from "./CelebrationDropdown.vue";
import SearchBar from "./SearchBar.vue";
import { ref } from "vue";
export default {
  components: {
    CategoriesDropdown,
    CelebrationDropdown,
    SearchBar,
    RouterLink,
  },
  setup() {
    const celDropdown = ref(false);
    const catDropdown = ref(false);
    const searchBar = ref(false);
    const setCatDropdown = () => {
      setTimeout(() => {
        catDropdown.value = !catDropdown.value;
      }, 200);
    };
    const setCelDropdown = () => {
      celDropdown.value = !celDropdown.value;
    };
    const setSearchBar = () => {
      searchBar.value = !searchBar.value;
    };
    return {
      catDropdown,
      setCatDropdown,
      celDropdown,
      setCelDropdown,
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
nav {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-size: auto;
}
nav:hover {
  background-color: beige;
  transition: 2s;
  box-shadow: 1px 1px 1px;
}
a {
  text-decoration: none;
}
.nav-item {
  padding: 25px 50px 25px 20px;
  cursor: pointer;
}
.nav-item:hover a {
  transition: 1s;
  color: red;
}
.icon {
  margin-left: 30px;
}
</style>
