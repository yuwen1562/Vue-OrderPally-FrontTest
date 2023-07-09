<template>
  <div>
    <div v-if="currentType != 'type3'" class="bg-dark-subtle p-3">
      <div v-for="(item, index) in typeData" :key="index" class="card mb-3 border-0">
        <div class="card-body">
          <div v-if="item.name">
            <div>Student: {{ item.name }}</div>
            <div>Year: {{ item.year }}, Room: {{ item.class }}</div>
          </div>

          <div v-else-if="item.title">
            <div>Title: {{ item.title }}</div>
            <div>Category: {{ item.category }} | {{ item.rating }} likes</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="bg-dark p-3">
      <h2 class="text-white mb-3 fw-bolder">Top 3 Winners</h2>
      <div v-for="(item, index) in typeData" :key="index" class="card mb-3 border-0">
        <div class="card-body fw-medium py-1">
          <div v-if="item.rank == index + 1">{{ item.rank }} {{ item.winner }}</div>
          <div v-else>{{ index + 1 }} {{ item.winner }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  typeData: {
    type: Array,
    required: true
  },
  currentType: String
})

// export default {
//   props: {
//     typeData: {
//       type: Array,
//       required: true
//     }
//   },
//   data() {
//     return {
//       message: 'Hello World!'
//     }
//   }
// }
</script>