// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace 'webflow-cloud-audio-guide' with your actual repository name
  base: '/webflow-cloud-audio-guide',
  // If you are deploying from the 'docs' folder on GitHub, ensure outDir matches
  // otherwise, GitHub Pages should usually point to the 'dist' or root of the branch
  outDir: './docs', 
});