<script setup>
import {useCounterStore} from "../stores/counter";

const number = useCounterStore()
</script>

<template>
  <div class="container">
    <p>{{ number.$state.counter }}</p>
    <a href="#" v-on:click="number.increment">Клик</a>
  </div>
</template>
