// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
	integrations: [
		starlight({
			title: 'iNative',
			description: 'Local IBM i / ILE development environment',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			editLink: {
				baseUrl: 'https://github.com/1bits-site/doc-inative/edit/main/',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/1bits-site/doc-inative' },
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is iNative?', slug: 'concepts/what-is-inative' },
						{ label: 'Why iNative?', slug: 'concepts/why-inative' },
						{ label: 'Current status', slug: 'concepts/current-status' },
					],
				},
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Supported',
					autogenerate: { directory: 'supported' },
				},
				{
					label: 'Compatibility',
					autogenerate: { directory: 'compatibility' },
				},
				{
					label: 'Roadmap',
					autogenerate: { directory: 'roadmap' },
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' },
				},
				{
					label: 'Releases',
					autogenerate: { directory: 'releases' },
				},
			],
		}),
	],
});
