<template>
  <div class="wrapper">
    <div class="sidebar">
      <h1 style="margin-bottom: 50px; text-transform: uppercase">My Account</h1>

      <router-link class="title" to="/account/details">My Details</router-link>
      <router-link class="title" to="/account/orders">My Orders</router-link>
    </div>
    <div class="detail">
      <h2 style="text-transform: uppercase">My Details</h2>
      <div class="information">
        <div class="head">
          <p style="text-transform: uppercase">Personal Information</p>
        </div>
        <div style="display: flex">
          <p>sdasdsadasdadasda</p>
          <div class="name">
            <input
              :class="{ invalid: invalidFirst }"
              type="text"
              class="input"
              :placeholder="firstPlaceholder"
              v-model="firstName"
              style="margin-left: 7px"
            />
            <div>
              <input
                :class="{ invalid: invalidLast }"
                type="text"
                class="input"
                v-model="lastName"
                style="margin-left: 60px"
                :placeholder="lastPlaceholder"
              />
            </div>
          </div>
          <div>
            <p style="color: red" v-if="emailAlert">Invalid Email</p>
            <p style="color: red" v-if="emailAlert2">Email Already Taken</p>

            <input
              type="text"
              :placeholder="emailPlaceholder"
              v-model="email"
              :class="{ invalid: invalidEmail }"
            />
          </div>
          <!-- <div>
          <p style="color: red" v-if="passAlert">Invalid Password</p>

          <input
            type="text"
            :placeholder="passPlaceholder"
            v-model="password"
            :class="{ invalid: invalidPassword }"
          />
        </div>
        <div>
          <p style="color: red" v-if="confirmAlert">Passwords aren't match</p>

          <input
            type="text"
            :placeholder="confirmPlaceholder"
            v-model="confirm"
            :class="{ invalid: invalidConfirm }"
          />
        </div> -->
        </div>
        <black-button to="/account/login" class="button">
          Update Account
        </black-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
var firstName = ref("");
var invalidFirst = ref(false);
var firstPlaceholder = ref("Firstname");
var invalidLast = ref(false);
var lastPlaceholder = ref("Lastname");
var invalidEmail = ref(false);
var emailPlaceholder = ref("Email");
var invalidPassword = ref(false);
var passPlaceholder = ref("Password");
var confirmPlaceholder = ref("Confirm Password");
var invalidConfirm = ref(false);
var lastName = ref("");
var password = ref("");
var email = ref("");
var confirm = ref("");
var emailAlert = ref(false);
var passAlert = ref(false);
var confirmAlert = ref(false);
var emailAlert2 = ref(false);
</script>
<style scoped>
.detail {
  width: 900px;
  background-color: white;
  border-radius: 5%;
  padding: 15px;
}
.information {
  width: 500px;
}
.name {
  display: flex;
  justify-content: space-around;
}
.title {
  display: block;
  padding: 15px 30px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
}
.title:hover {
  background-color: rgb(45, 65, 65);
  color: white;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 100px;
  background-color: rgb(234, 234, 234);
}
.input {
  display: inline-block;
  border: 1px solid black;
  height: 50px;
  outline: none;
  font-size: 15px;
  width: 130px;
  margin-top: 10px;
  margin-bottom: 10px;
}
input {
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  outline: none;
  font-size: 15px;
  width: 320px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.button {
  margin-bottom: 20px;
  margin-top: 20px;
  display: block;
}
.login {
  margin-top: 5px;
  border-radius: 10px;
  padding: 6px;
  display: block;
  justify-content: center;
  width: 100%;
}
button {
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  width: 90%;
}
</style>
