import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import PanelMenu from 'primevue/panelmenu'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

import './style.css'
import App from '@/pages/App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.component('VButton', Button)
app.component('PanelMenu', PanelMenu)

app.mount('#app')
