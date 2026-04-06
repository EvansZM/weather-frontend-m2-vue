// Importa la función para crear la aplicación de Vue
import { createApp } from 'vue'

// Importa el componente raíz de la aplicación
import App from './App.vue'

// Importa el router que crearemos para manejar las vistas
import router from './router'

// Importa los estilos globales si luego usaremos uno propio
import './assets/main.css'

// Crea la aplicación Vue
const app = createApp(App)

// Le conecta el router a la aplicación
app.use(router)

// Monta la aplicación en el div con id "app" del index.html
app.mount('#app')