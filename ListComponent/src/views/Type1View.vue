<script setup>
import ListFragment from '../components/ListFragment.vue'
import { typeOne } from '../assets/FakeData'

console.log('typeOne =', typeOne)
</script>

<template>
  <ListFragment :typeData=typeOne />
</template>
