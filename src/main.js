import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'

const app = createApp(App)

const routes = [
    { path: '/main', component: MainPage, name: 'mainPage', alias: '/' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(createPinia())
app.use(router)
app.mount('#app')
