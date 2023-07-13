import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({
    cache: false,
    include: ['./src/**/*.js', './src/**/*.jsx'],
    exclude: [],
  })],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      styles: '/src/styles',
      utils: '/src/utils'
    },
  },
});