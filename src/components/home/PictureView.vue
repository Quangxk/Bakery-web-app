<template>
  <div class="wrapper">
    <div class="container">
      <p class="caption">brot und kaffe</p>
      <white-button class="button" to="">discover now</white-button>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  background-image: url("../../assets/Background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.caption {
  letter-spacing: 5px;
  color: white;
  font-size: 60px;
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 320px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 200px;
}
</style>
