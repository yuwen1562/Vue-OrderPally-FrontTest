<template>
  <ListFragment :typeData=typeThree :currentType="'type3'" />
</template>

<script setup>
import ListFragment from '../components/ListFragment.vue'
import { typeThree } from '../assets/FakeData'
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
  