import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Custom Components
import Header from './components/Header.vue'
import SubHeader from './components/SubHeader.vue'
import Help from './components/Help.vue'
import About from './components/Help.vue'

createApp(App).use(router, Header, SubHeader, Help, About).mount('#app')
