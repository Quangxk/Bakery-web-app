<template>
  <div class="wrapper">
    <div class="form">
      <h2><i>Sign Up</i></h2>
      <p>
        Sign up to access your profile info,<br />
        order history and more.
      </p>
      <div style="display: flex">
        <div>
          <input
            :class="{ invalid: invalidFirst }"
            type="text"
            class="input"
            :placeholder="firstPlaceholder"
            v-model="firstName"
            style="margin-left: 7px"
          />
        </div>
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
      <div>
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
      </div>
      <black-button to="" class="button" @click="validate">
        Create account
      </black-button>
      <div style="display: flex; justify-content: center">
        <p style="text-transform: uppercase; font-size: 14px">
          already have an account?
        </p>
        <router-link to="/account/login" style="margin-left: 10px"
          >Login Here</router-link
        >
      </div>
      <p style="margin-top: 15px">---------------or---------------</p>
      <div class="login facebook">
        <button style="color: white">Signup with Facebook</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="#f7f7f8"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </div>
      <div class="login instagram">
        <button style="color: white">Signup with Instagram</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="#f7f7f8"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </div>
      <p style="font-size: 12px; margin-top: 10px">
        By clicking any of the social login buttons you agree to the <br />terms
        of privacy policy described
        <a href="#" style="text-transform: none">here</a>
      </p>
    </div>
    <button @click="test">push</button>
  </div>
</template>
<script setup lang="ts">
import { useProduct } from "@/stores/Product";
import { ref } from "vue";
import { onMounted } from "vue";
import router from "@/router";
import axios from "axios";
var user: string[] = [];
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
var all = useProduct().items;
function validateFirst() {
  if (firstName.value === "") {
    invalidFirst.value = true;
    firstPlaceholder.value = "Empty firstname";
  } else {
    invalidFirst.value = false;
  }
}
function validateLast() {
  if (lastName.value === "") {
    invalidLast.value = true;
    lastPlaceholder.value = "Empty lastname";
  } else {
    invalidLast.value = false;
  }
}
function emailTest() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
}
function checkDuplicate() {
  for (const i in user) {
    if (email.value == user[i]) {
      return true;
    }
  }
  return false;
}
function validateEmail() {
  if (email.value === "") {
    invalidEmail.value = true;
    emailAlert.value = false;
    emailAlert2.value = false;
    emailPlaceholder.value = "Empty email";
  } else if (!emailTest()) {
    invalidEmail.value = true;
    emailAlert.value = true;
    emailAlert2.value = false;
  } else if (checkDuplicate()) {
    invalidEmail.value = true;
    emailAlert2.value = true;
    emailAlert.value = false;
  } else {
    invalidEmail.value = false;
    emailAlert.value = false;
  }
}
function validatePassword() {
  if (password.value === "") {
    invalidPassword.value = true;
    passPlaceholder.value = "Empty password";
  } else if (!(password.value.length >= 8 && !/\s/.test(password.value))) {
    invalidPassword.value = true;
    passAlert.value = true;
  } else {
    invalidPassword.value = false;
    passAlert.value = false;
  }
}

function validateConfirm() {
  if (confirm.value === "") {
    invalidConfirm.value = true;
    confirmPlaceholder.value = "Empty confirm password";
  } else if (confirm.value != password.value) {
    invalidConfirm.value = true;
    confirmAlert.value = true;
  } else {
    invalidConfirm.value = false;
    confirmAlert.value = false;
  }
}
function test() {
  axios.post(
    "https://vue-bakery-eb895-default-rtdb.asia-southeast1.firebasedatabase.app/Items.json",
    {}
  );
}
function validate() {
  validateFirst();
  validateLast();
  validateEmail();
  validatePassword();
  validateConfirm();
  checkDuplicate();
  if (
    invalidEmail.value === false &&
    invalidPassword.value === false &&
    invalidFirst.value === false &&
    invalidLast.value === false &&
    invalidConfirm.value === false
  ) {
    axios
      .post(
        "https://vue-bakery-eb895-default-rtdb.asia-southeast1.firebasedatabase.app/UsersInfo.json",
        {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Password: password,
        }
      )
      .then((response) => {
        if (response.status != null && response.status === 200) {
          router.push({
            path: "/account/login",
          });
        }
      })
      .catch((error) => console.log(error));
  }
}
onMounted(() => {
  axios
    .get(
      "https://vue-bakery-eb895-default-rtdb.asia-southeast1.firebasedatabase.app/UsersInfo.json"
    )
    .then((response) => {
      for (const id in response.data) {
        user.push(response.data[id].Email._value);
      }
      console.log(user);
    })
    .catch((err) => console.log(err));
});
</script>
<style scoped>
h2 {
  margin-bottom: 30px;
}
a {
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
}
.wrapper {
  background-image: url("../assets/Login-SignUp.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  border-radius: 20px;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  text-align: center;
}
.input {
  border: none;
  border-bottom: 1px solid black;
  height: 50px;
  outline: none;
  font-size: 15px;
  width: 130px;
  margin-top: 10px;
  margin-bottom: 10px;
}
input {
  border: none;
  border-bottom: 1px solid black;
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
.facebook:hover {
  background-color: rgb(60, 60, 172);
}
.instagram:hover {
  background-color: rgb(162, 36, 36);
}
.facebook {
  background-color: blue;
  display: flex;
}
.instagram {
  background-color: rgb(236, 37, 113);
  display: flex;
}
.invalid {
  border-bottom: 1px solid red;
}
</style>
