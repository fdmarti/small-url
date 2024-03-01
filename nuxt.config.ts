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
	runtimeConfig: {
		MONGO_URL: process.env.MONGO_URL,
		MONGO_DB_NAME: process.env.MONGO_DB_NAME,

		MONGO_INITDB_ROOT_USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME,
		MONGO_INITDB_ROOT_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD,
	},
});
