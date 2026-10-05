import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://jcpopdigitalpartners.github.io',
  base: '/webflow-cloud-audio-guide/docs/',
  output: 'static',
  server: { host: '0.0.0.0', port: 4173 },
});
