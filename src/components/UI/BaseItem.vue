<template>
  <div class="item">
    <div class="wrapper">
      <router-link :to="`/items/${id}`">
        <img
          class="image"
          :src="itemLink"
          height="250"
          width="300"
          v-on:mouseleave="mouseleave()"
          v-on:mouseover="mouseover()"
        />
      </router-link>
    </div>
    <div class="view" v-if="isShow">
      <p>View Item</p>
    </div>

    <p>{{ itemName }}</p>
    <p>{{ price }}</p>
    <p>{{ isbest }}</p>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: ["itemName", "price", "itemLink", "id", "isbest"],
  setup() {
    const isShow = ref(false);
    function mouseover() {
      isShow.value = !isShow.value;
    }
    function mouseleave() {
      isShow.value = !isShow.value;
    }

    return {
      mouseover,
      isShow,
      mouseleave,
    };
  },
};
</script>
<style scoped>
.item {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 50px;
}
.image {
  cursor: pointer;
  object-fit: cover;
}
.image:hover {
  opacity: 0.5;
  transition: 0.5s;
  overflow: hidden;
}
.view {
  margin-top: 143px;
  position: absolute;
  display: flex;
  width: inherit;
  text-align: center;
  height: 50px;
  background-color: aqua;
  justify-content: center;
  align-items: center;
}
</style>
