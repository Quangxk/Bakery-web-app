<template>
  <div class="wrapper">
    <p>hello</p>
    <div class="pictures">
      <img src="../../assets/Holiday1.jpg" class="pic" />
      <img src="../../assets/Holiday2.jpg" class="pic" />
      <img src="../../assets/Holiday3.jpg" class="pic" />
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.wrapper {
  background-color: #0b1c2c;
  height: 300px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.pic {
  height: 200px;
  width: 200px;
}
</style>
