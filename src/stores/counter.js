import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  let tasks = ref([]);

  const inciliationTasks = function() {
    let tasksNew = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.value = tasksNew;
  };

  const addTask = function(text) {
    const task = {
      id: Date.now(),
      text: text,
      complete: false,
    };
    const tasksNew = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksNew.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksNew));
  };

  const deleteTask = function(id) {
    let tasksNew = JSON.parse(localStorage.getItem('tasks'));
    tasksNew = tasksNew.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasksNew));
  };

  const swapComplete = function(id) {
    let tasksNew = JSON.parse(localStorage.getItem('tasks'));
    tasksNew.map(function(item) {
        if(item.id == id) {
            item.complete = !item.complete;
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasksNew));
  };

  return { tasks, addTask, deleteTask, swapComplete, inciliationTasks }
})

