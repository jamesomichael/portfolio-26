import { IoShieldHalfSharp } from 'react-icons/io5';

import type { Project } from '@/types/projects';

const vault: Project = {
	name: 'Vault',
	isFeatured: true,
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-blue-300 via-slate-600',
			logo: (
				<div className="flex items-center gap-2 text-blue-300 text-4xl sm:text-5xl">
					<IoShieldHalfSharp />
					<span className="font-hubot">Vault</span>
				</div>
			),
		},
		projectTile: {
			backgroundGradient: 'from-blue-200 to-blue-300',
			logo: (
				<div className="flex items-center gap-2 text-blue-300 group-hover:text-slate-800 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
					<IoShieldHalfSharp />
					<span className="font-hubot">Vault</span>
				</div>
			),
		},
		navbarDropdown: {
			logo: (
				<div className="flex items-center gap-2 text-3xl">
					<IoShieldHalfSharp />
					<span className="font-hubot">Vault</span>
				</div>
			),
		},
	},
	externalLinks: [
		{
			url: 'https://github.com/jamesomichael/vault',
			type: 'github',
			label: 'Get Electron demo',
		},
		{
			url: 'https://github.com/jamesomichael/vault-ui',
			type: 'github',
			label: 'View source code (UI)',
		},
		{
			url: 'https://github.com/jamesomichael/vault-api',
			type: 'github',
			label: 'View source code (API)',
		},
		{
			url: 'https://jamesomichael.github.io/vault-api',
			type: 'website',
			label: 'View API docs',
		},
		{
			url: 'https://vault-ui-demo.jamesmichael.dev',
			type: 'website',
			label: 'Visit UI demo',
		},
		{
			url: 'https://jamesomichael.github.io/vault-ui',
			type: 'storybook',
		},
	],

	headline: 'Zero-knowledge password management.',
	description: (
		<>
			<p>
				<i>Vault</i> is a secure, local-first password manager that
				follows a zero-knowledge architecture.
			</p>
			<p>
				Designed with multiple local users in mind, <i>Vault</i> allows
				each user to store their items securely. Manage existing
				passwords, generate strong new ones, and set favourites for
				quick access - all within a clean, focused, Bitwarden-inspired
				UI.
			</p>
			<p>
				The frontend is built with <strong>React</strong>,{' '}
				<strong>Redux Toolkit</strong>, and{' '}
				<strong>Tailwind CSS</strong>, while the backend uses{' '}
				<strong>Node.js</strong>, <strong>Express</strong>, and{' '}
				<strong>SQLite</strong> (via <strong>better-sqlite3</strong>).
				It adheres to the <strong>OpenAPI 3.0</strong> specification,
				provides cookie-based user authentication (powered by{' '}
				<strong>JWT</strong>), and enforces strict,{' '}
				<strong>Joi-based</strong> schema validation. The entire project
				is written in <strong>TypeScript</strong>.
			</p>
			<p>
				Security is of the utmost importance: all master passwords are
				hashed with <strong>Argon2id</strong>. An{' '}
				<strong>encryption key</strong> is derived client-side using{' '}
				<strong>PBKDF2</strong> (SHA-256 and a unique salt), and all
				vault data is encrypted in the browser with{' '}
				<strong>AES-GCM</strong>. Initialization vectors (IVs) are
				generated per vault item and stored alongside the encrypted
				data.
			</p>
			<p>The server never sees unencrypted vault data.</p>
			{/* <p>
				<strong>Electron</strong> is used to bundle the frontend and
				backend into a standalone desktop application.
			</p> */}
		</>
	),
	techStack: [
		'React',
		'Redux Toolkit',
		'TypeScript',
		'Tailwind CSS',
		'Storybook',
		'React Testing Library',
		'Jest',
		'Node.js',
		'Express',
		'SQLite',
		'better-sqlite3',
		'Celebrate (Joi)',
		'JWT',
		'OpenAPI',
		'Swagger UI',
		'Docker',
		'Electron',
		'AES-GCM',
		'PBKDF2',
		'Argon2id',
	],
	media: {
		images: {
			desktop: [
				'/projects/vault/vault-items.png',
				'/projects/vault/home.png',
				'/projects/vault/create-item-form.png',
				'/projects/vault/create-generator.png',
				'/projects/vault/generator.png',
				'/projects/vault/new-user.png',
				'/projects/vault/create-user-form.png',
				'/projects/vault/user-selection-1.png',
				'/projects/vault/user-selection-2.png',
				'/projects/vault/locked.png',
				// '/projects/vault/favourites.png',
				// '/projects/vault/search.png',]
			],
		},
	},
};

export default vault;
