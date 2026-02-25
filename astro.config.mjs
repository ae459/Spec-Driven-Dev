import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ae459.github.io',
  base: '/Spec-Driven-Dev',
  integrations: [tailwind()]
});