<template>
  <div class="item">
    <p>{{ itemName }}</p>
    <p>{{ price }}</p>
  </div>
</template>
<script lang="ts">
export default {
  props: ["itemName", "price"],
};
</script>
<style scoped></style>
