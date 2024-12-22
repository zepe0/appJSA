# Jasomaki

Este proyecto utiliza Vite y React.

## Configuración del servidor

Asegúrate de que el servidor de desarrollo de Vite está configurado para manejar rutas del lado del cliente. Esto se hace añadiendo `historyApiFallback: true` en la configuración del servidor en `vite.config.js`.

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
```

# Proyecto Jasomaki

## Instrucciones para servir el build

Para servir el build, puedes usar un servidor HTTP simple como `serve`:

```bash
npm install -g serve
serve -s dist
```

Esto iniciará un servidor en `http://localhost:5000` que servirá tu aplicación.

Asegúrate de que el servidor está configurado para manejar rutas del lado del cliente.
