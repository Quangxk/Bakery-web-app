<template>
  <div class="wrapper">
    <div class="container">
      <div class="caption">
        <p>This is a bakery</p>
        <p class="lol">(we also have drinks lol)</p>
      </div>
      <white-button class="button" to="/pastries/all"
        >discover now</white-button
      >
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
.lol {
  font-size: 20px;
  letter-spacing: 3px;
}
</style>
