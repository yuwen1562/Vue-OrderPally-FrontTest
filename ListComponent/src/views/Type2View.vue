<template>
  <ListFragment :typeData=typeTwo />
</template>

<script setup>
import ListFragment from '../components/ListFragment.vue'
import { typeTwo } from '../assets/FakeData'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
