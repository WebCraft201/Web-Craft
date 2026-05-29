import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root,
  plugins: [react()],
   server: {
    port: 5173,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom/client',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'lucide-react',
    ],
  },
});