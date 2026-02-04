import type { Project } from '@/types/projects';

const contactVaultAPI: Project = {
	name: 'Contact Vault API',
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-cyan-500 via-cyan-500',
			logo: (
				<span className="font-roboto font-stretch-50% text-white text-4xl sm:text-5xl">
					Contact Vault API
				</span>
			),
		},
		projectTile: {
			logo: (
				<span className="font-roboto font-stretch-50% text-4xl sm:text-5xl">
					Contact Vault API
				</span>
			),
		},
		navbarDropdown: {
			logo: (
				<span className="font-roboto font-stretch-50% text-3xl">
					Contact Vault API
				</span>
			),
		},
	},
	externalLinks: [
		{
			url: 'https://jamesomichael.github.io/contact-vault-api/',
			type: 'website',
			label: 'View API docs',
		},
		{
			url: 'https://github.com/jamesomichael/contact-vault-api',
			type: 'github',
		},
	],
	headline: 'Manage your contacts.',
	description: (
		<>
			<p>
				Manage your personal and business contacts with{' '}
				<i>Contact Vault</i>, a RESTful API built with{' '}
				<strong>Node.js</strong>, <strong>Express</strong>, and{' '}
				<strong>TypeScript</strong>.
			</p>
			<p>
				Designed following the <strong>OpenAPI 3.0</strong>{' '}
				specification, it allows users to create, read, update, and
				delete contacts - with strict, <strong>Joi-based</strong> schema
				validation enforced throughout.{' '}
			</p>
			<p>
				<i>Contact Vault</i> integrates with <strong>MongoDB</strong>{' '}
				via <strong>Mongoose</strong> for database storage, and includes
				authentication powered by <strong>JWT</strong> and{' '}
				<strong>bcrypt.js</strong>.
			</p>
			<p>
				The API is{' '}
				<a
					href="https://jamesomichael.github.io/contact-vault-api/"
					target="_blank"
					className="italic hover:underline"
					rel="noopener noreferrer"
				>
					fully documented
				</a>{' '}
				and all core functionality is covered by a suite of tests
				written with <strong>Jest</strong>.
			</p>
		</>
	),
	techStack: [
		'Node.js',
		'Express',
		'TypeScript',
		'MongoDB',
		'Mongoose',
		'Jest',
		'Celebrate (Joi)',
		'JWT',
		'bcrypt.js',
		'OpenAPI',
		'Swagger UI',
		'Docker',
	],
};

export default contactVaultAPI;
