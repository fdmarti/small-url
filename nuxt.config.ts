// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		'@': resolve(__dirname, '/'),
	},
	css: ['./assets/css/main.css'],
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	tailwindcss: {
		exposeConfig: true,
	},
});
