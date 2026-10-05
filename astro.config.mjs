import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  base: '/webflow-cloud-audio-guide/',
  server: { host: '0.0.0.0', port: 4173 },
});
