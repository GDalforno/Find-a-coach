import { createApp, defineAsyncComponent } from 'vue'

import App from './App.vue'
import BaseBadge from './components/ui/BaseBadge'
import BaseButton from './components/ui/BaseButton'
import BaseCard from './components/ui/BaseCard'
import BaseSpinner from './components/ui/BaseSpinner'
import router from './router'
import store from './store'

const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog'))

const app = createApp(App)

app.component('BaseBadge', BaseBadge)
app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseDialog', BaseDialog)
app.component('BaseSpinner', BaseSpinner)

app.use(router)
  .use(store)
  .mount('#app')
