import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  base: '/webflow-cloud-audio-guide/_astro/',
  server: { host: '0.0.0.0', port: 4173 },
});
