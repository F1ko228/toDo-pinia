<script setup>
    import { useTasksStore } from '@/stores/counter';
    const store = useTasksStore();
    const props = defineProps({
        id: {
            type: Number, 
            required: true,
        },
        complete: {
            type: Boolean, 
            required: true, 
        },
        text: {
            type: String,
            required: true, 
        },
    });
    const deleteTask = function(id) {
        store.deleteTask(id);
        store.inciliationTasks();
  };

  const swapComplete = function(id) {
    store.swapComplete(id);
    store.inciliationTasks();
  };
</script>

<template>
    <div class="task">
        <div class="task-main">
            <div v-if="!props.complete" class="task-main__complete" @click="swapComplete(props.id)"></div>
            <div v-else class="task-main__complete task-main__complete--true" @click="swapComplete(props.id)"><img src="../assets/image/check.svg" alt="check" width="18px"
                height="18px"></div>
            <p class="task-main__text">{{ props.text }}</p>
            <div class="task-main__trash" @click="deleteTask(props.id)"><img src="../assets/image/trash.png" alt="trash" width="18px" height="18px"></div>
        </div>
        <div class="task-separator"></div>
    </div>
</template>

<style scoped>
    .task {
        width: 99%;
        height: 80px;
        min-height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .task-main {
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .task-separator {
        width: 100%;
        height: 1px;
        background-color: #000;
        border-radius: 50%;
    }
    .task-main__complete {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid black;
        cursor: pointer;
        margin-right: 30px;
    }
    .task-main__trash {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid black;
        background-color: lightgray;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
        cursor: pointer;
        right: 0;
    }
    .task-main__trash:hover {
        background-color: #fff;
    }
    .task-main__complete.task-main__complete--true {
        background-color: #008000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .task-main__text {
        font-size: 18px;
    }
</style>