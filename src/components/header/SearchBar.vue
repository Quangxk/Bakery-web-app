<template>
  <div class="dropdown">
    <input type="text" class="input" placeholder="search" />
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.input {
  height: 70px;
  left: 300px;
  width: 800px;
  position: absolute;
  border: 0px solid;
  outline: none;
  background-color: beige;
  font-size: 25px;
}
.dropdown {
  display: flex;
  width: 100vw;
  background-color: beige;
  position: absolute;
  top: 100px;
  height: 70px;
}
</style>
