// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Angular Launch Pad',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/JeffryGonzalez/angular-launch-pad' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'guide' },
					],
				},
				{
					label: 'The Development Environment',
					items: [
						{ label: 'Our Editor', slug: 'guide/the-development-environment/our-editor' },
						{ label: 'Basics of Your Operating System Shell', slug: 'guide/the-development-environment/basics-of-your-operating-system-shell' },
						{ label: 'The Basics of Source Code Control', slug: 'guide/the-development-environment/the-basics-of-source-code-control' },
						{ label: 'Node.js and NPM', slug: 'guide/the-development-environment/node-js-and-the-node-package-manager' },
					],
				},
				{
					label: 'The Web Platform',
					items: [
						{ label: 'The World Wide Web', slug: 'guide/the-web-platform/the-world-wide-web' },
						{ label: 'HTML', slug: 'guide/the-web-platform/html' },
						{ label: 'Cascading Style Sheets (CSS)', slug: 'guide/the-web-platform/cascading-style-sheets' },
						{ label: 'Introduction to Accessibility', slug: 'guide/the-web-platform/introduction-to-accessibility' },
						{ label: 'JavaScript', slug: 'guide/the-web-platform/java-script' },
						{ label: 'Browser Developer Tools', slug: 'guide/the-web-platform/browser-developer-tools' },
						{ label: 'The Document Object Model (DOM)', slug: 'guide/the-web-platform/the-document-object-model' },
						{ label: 'Introduction to TypeScript', slug: 'guide/the-web-platform/introduction-to-type-script' },
					],
				},
				{
					label: 'Student Resources',
					items: [
						{ label: 'Keyboard Shortcuts Cheat Sheet', slug: 'guide/keyboard-shortcuts-cheat-sheet' },
					],
				},
				{
					label: 'Project',
					items: [
						{ label: 'Planning & Notes', slug: 'planning' },
					],
				},
			],
		}),
	],
});
