<template>
  <div class="wrapper">
    <div class="form">
      <h2><i>Log In</i></h2>
      <p>
        Log in to your account to access your profile info,<br />
        order history and more.
      </p>
      <div>
        <p v-if="emailNotExist" style="color: red">Email Doesn't Exist</p>
        <input
          type="text"
          :placeholder="emailPlaceholder"
          v-model="email"
          :class="{ invalid: invalidEmail }"
          @blur="validate()"
        />
      </div>
      <div>
        <p v-if="wrongPassword" style="color: red">Wrong Password</p>

        <input
          type="text"
          :placeholder="passwordPlaceholder"
          v-model="password"
          :class="{ invalid: invalidPassword }"
          @blur="validate()"
        />
      </div>
      <a href="#">Forgot PassWord?</a>
      <black-button :to="link" class="button"> Login </black-button>
      <router-link to="/account/signup">Create account</router-link>
      <p style="margin-top: 15px">---------------or---------------</p>
      <div class="login facebook">
        <button>Login With Facebook</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="#f7f7f8"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </div>
      <div class="login instagram">
        <button>Login with Instagram</button>
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
  </div>
</template>

<script setup lang="ts">
interface User {
  Email: string;
  Password: string;
}
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";
var user: User[] = [];
const email = ref("");
var emailAlert = ref(false);
var passwordAlert = ref(false);
var invalidEmail = ref(false);
var invalidPassword = ref(false);
const password = ref("");
var emailPlaceholder = ref("Email");
var passwordPlaceholder = ref("Password");
var emailNotExist = ref(false);
var wrongPassword = ref(false);
var link = ref("");
function validateEmail() {
  if (email.value === "") {
    invalidEmail.value = true;
    emailPlaceholder.value = "Please enter an email";
  } else {
    invalidEmail.value = false;
    emailAlert.value = false;
  }
}
function validatePassword() {
  if (password.value === "") {
    invalidPassword.value = true;
    passwordPlaceholder.value = "Please enter a password";
  } else {
    invalidPassword.value = false;
    passwordAlert.value = false;
  }
}
function checkAccount() {
  for (const i in user) {
    if (
      wrongPassword.value == false &&
      email.value != "" &&
      email.value != user[i].Email
    ) {
      emailNotExist.value = true;
      console.log(emailNotExist.value);
    } else if (password.value != "" && password.value != user[i].Password) {
      emailNotExist.value = false;
      wrongPassword.value = true;
      console.log(emailNotExist.value);
    } else {
      wrongPassword.value = false;
      emailNotExist.value = false;
      console.log(emailNotExist.value);
      return true;
    }
  }
}
function validate() {
  validateEmail();
  validatePassword();
  checkAccount();
  if (
    invalidEmail.value == false &&
    invalidPassword.value == false &&
    emailNotExist.value == false &&
    wrongPassword.value == false
  ) {
    link.value = "/home";
  }
}
onMounted(() => {
  axios
    .get(
      "https://vue-bakery-eb895-default-rtdb.asia-southeast1.firebasedatabase.app/UsersInfo.json"
    )
    .then((response) => {
      for (const id in response.data) {
        user.push({
          Email: response.data[id].Email._value,
          Password: response.data[id].Password._value,
        });
      }
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
::placeholder {
  opacity: 1;
}
.form {
  border-radius: 20px;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  text-align: center;
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
  color: white;
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
