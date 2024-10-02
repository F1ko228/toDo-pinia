<script setup>
    import TaskBar from '../components/TaskBar.vue'
    import { ref, watch } from 'vue'
    import { useTasksStore } from '@/stores/counter';
    let tasksStore = useTasksStore();
    let text = ref('');
    let shouldClear = ref(false);
    function addTask(text) {
        if(text == '' || text.length > 15) return;
        tasksStore.addTask(text);
        tasksStore.inciliationTasks();
        shouldClear.value = true;
    };
    watch(shouldClear, (newValue) => {
        if (newValue) {
            text.value = '';
            shouldClear.value = false;
        }
    });
</script>

<template>
    <nav class="nav">
        <form class="nav-form">
            <input class="nav-form__input" type="text" placeholder="create new task" v-model="text">
            <button class="nav-form__button" @click.prevent="addTask(text)">add</button>
        </form>
    </nav>
    <section class="main">
        <h1 class="main__title">To Do list</h1>
        <div class="main__tasks">
            <TaskBar  v-for="task in tasksStore.tasks" :key="task.id" :id="task.id" :text="task.text" :complete="task.complete" />
        </div>
    </section>
</template>

<style scoped>
    .nav {
        width: 95%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-form {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .nav-form__input {
        width: 400px;
        height: 25px;
        border-radius: 10px;
        outline: none;
        border: 1px solid lightgray;
        padding-left: 10px;
        font-size: 15px;
    }
    .nav-form__button {
        width: 150px;
        height: 35px;
        border-radius: 10px;
        outline: none;
        border: none;
        background-color: #8B00FF;
        color: #fff;
        font-size: 18px;
        transition: .3s;
    }
    .nav-form__button:hover {
        background-color: #991199;
    }
    .main {
        width: 80%;
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 5px;
    }
    .main__title {
        font-size: 25px;
    }
    .main__tasks {
        width: 100%;
        height: 695px;
        min-height: 695px;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;
        justify-content: start;
        overflow-y: scroll;
        scrollbar-width: none;
    }
    .main__tasks::-webkit-scrollbar {
        display: none;
    }
    @media(max-width: 620px) {
        .nav-form__input {
            width: 250px;
        }
        .nav-form__button {
            width: 75px;
        }
    }
</style>
