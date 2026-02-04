import type { Project } from '@/types/projects';

const mediamate: Project = {
	name: 'mediamate',
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-yellow-500 via-yellow-500',
			logo: (
				<span className="font-unbounded text-3xl md:text-4xl text-yellow-500 font-black">
					media
					<span className="font-extralight text-white">mate</span>
				</span>
			),
		},
		projectTile: {
			logo: (
				<span className="font-unbounded text-3xl md:text-4xl font-black">
					media
					<span className="font-extralight">mate</span>
				</span>
			),
		},
		navbarDropdown: {
			logo: (
				<span className="font-unbounded font-black text-2xl">
					media
					<span className="font-extralight">mate</span>
				</span>
			),
		},
	},
	externalLinks: [
		{
			type: 'github',
			url: 'https://github.com/jamesomichael/mediamate-server',
			label: 'View server code',
		},
		{
			type: 'github',
			url: 'https://github.com/jamesomichael/mediamate-chrome',
			label: 'View extension code',
		},
	],
	headline: 'Your personal download assistant.',
	description: (
		<>
			<p>
				<i>mediamate</i> integrates with <strong>yt-dlp</strong> to
				download audio and video files.
			</p>
			<p>
				It starts with a Chrome extension built with{' '}
				<strong>React</strong> and <strong>Tailwind CSS</strong>. You
				can easily trigger downloads through the extension, which
				communicates with a server built with <strong>Node.js</strong>{' '}
				and <strong>Express</strong>.
			</p>
			<p>
				The server uses <strong>SQLite</strong> to track download tasks
				and store related metadata. A scheduled cron job processes the
				downloads periodically.
			</p>
		</>
	),
	techStack: [
		'Node.js',
		'Express',
		'Celebrate (Joi)',
		'SQLite',
		'React',
		'Tailwind CSS',
		'yt-dlp',
	],
};

export default mediamate;
