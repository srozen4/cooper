import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cooper/', // Update the base to match your repository name
  plugins: [react()],
});
