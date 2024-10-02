<script setup>  
import { useTasksStore } from '@/stores/counter';
import { onMounted } from 'vue';
let tasksStore = useTasksStore();
onMounted(() => {
  tasksStore.inciliationTasks();
})
</script>

<template>  
  <section class="app">
    <router-view />
  </section>
</template>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
</style>
