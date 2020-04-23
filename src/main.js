import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import RCA from './assets/js/RCA'

const app = createApp(App)

RCA(app)

app.use(router).use(store).mount('#app')
