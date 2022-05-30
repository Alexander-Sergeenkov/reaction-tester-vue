<script setup>
import {useUserStore} from "../stores/user";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const user = useUserStore()
const auth = getAuth()
const reg = () => {
  createUserWithEmailAndPassword(auth,user.emailInput, user.passwordInput)
      .then((userCredential) => {
        const userInfo = userCredential.user
        user.login(userInfo.email)
      })
}

const login = () => {
  signInWithEmailAndPassword(auth,user.emailInput, user.passwordInput)
      .then((userCredential) => {
        const userInfo = userCredential.user
        user.login(userInfo.email)
      })
      .catch((error) => {
        const errorCode = error.code;
        user.error(errorCode)
        console.log(errorCode)
      });
}

</script>
<template>
<div class="container">
  <div class="top">
    <p>Hello!<br>Our game is absolutely free, but you need to login!</p>
  </div>
  <div class="inputs">
    <p class="error" v-if="user.errorMessage===`auth/invalid-email`">Email is not suitable</p>
    <p class="error" v-else-if="user.errorMessage===`auth/user-not-found`">There is no user with such Email</p>
    <p class="error" v-else-if="user.errorMessage===`auth/wrong-password`">Password is incorrect</p>
    <p class="error" v-else></p>
    <input type="text" placeholder="Email" v-model="email" @change="user.emailValue(email)"/>
    <input type="password" placeholder="Password" v-model="password" @change="user.passwordValue(email)">
  </div>
  <div class="bottom">
    <a href="#" v-on:click="login">Login</a>
    <a href="#" v-on:click="reg">Register</a>
  </div>
</div>
</template>

<style lang="sass" scoped>
.container
  width: 100%
  height: 100vh
  left: 0
  top: 0
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
.top
  width: 100%
  text-align: center
  p
    font-size: 30px

.inputs
  margin-left: auto
  margin-right: auto
  margin-top: 40px
  display: flex
  flex-direction: column
  p
    margin-bottom: 10px
    color: red
  input
    background: transparent
    border: 1px solid white
    font-size: 16px
    border-radius: 10px
    padding: 15px
    outline: none
    color: white
    margin-bottom: 20px
.bottom
  margin-left: auto
  margin-right: auto
  display: flex
  margin-top: 40px
  a
    color: white
    border: 1px solid white
    text-decoration: none
    margin: 0 7px
    font-size: 16px
    padding: 7px 30px
</style>