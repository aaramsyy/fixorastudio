// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://fixorastudio.com',
	integrations: [react(), sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } } })],
	vite: {
		plugins: [tailwindcss()],
	},
});
