import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //! Настройка проксирования запросов
  server: {
    proxy: {
      '/api': {
        //! по пути на api
        target: 'http://localhost:3000', //! проксируй на http://localhost:3000'
      },
    },
  },
});
