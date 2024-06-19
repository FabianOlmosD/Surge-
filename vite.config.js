import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Surge-/', // Reemplaza 'Surge-' con el nombre de tu repositorio
});
