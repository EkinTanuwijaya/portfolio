import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects/index.html', import.meta.url)),
        financialTracker: fileURLToPath(new URL('./projects/financial-tracker/index.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact/index.html', import.meta.url)),
      },
    },
  },
});
