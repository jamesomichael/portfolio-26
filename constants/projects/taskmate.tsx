import type { Project } from '@/types/projects';

const taskmate: Project = {
	name: 'taskmate',
	isFeatured: true,
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-blue-800 via-blue-800',
			logo: (
				<span className="font-unbounded text-3xl sm:text-4xl text-blue-500 font-black">
					task
					<span className="text-white font-extralight">mate</span>
				</span>
			),
		},
		projectTile: {
			backgroundGradient: 'from-blue-500 to-blue-800',
			logo: (
				<span className="font-unbounded text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-blue-500 group-hover:text-white font-black">
					task
					<span className="text-white font-extralight">mate</span>
				</span>
			),
		},
		navbarDropdown: {
			logo: (
				<span className="font-unbounded font-black text-2xl">
					task
					<span className="font-extralight">mate</span>
				</span>
			),
		},
	},
	headline: 'Project management inspired by Trello.',
	externalLinks: [
		{
			url: 'https://taskmate.jamesmichael.dev',
			type: 'website',
		},
		{
			url: 'https://github.com/jamesomichael/taskmate',
			type: 'github',
		},
	],
	description: (
		<>
			<p>
				<i>taskmate</i> replicates Trello's core functionality, helping
				users to organise projects, manage tasks, and track progress
				with ease.
			</p>
			<p>
				Create boards, add lists, and drag and drop cards to manage
				workflows intuitively.
			</p>
			<p>
				Built with <strong>Next.js</strong> and{' '}
				<strong>Tailwind CSS</strong>, <i>taskmate</i> uses{' '}
				<strong>Zustand</strong> for lightweight state management and
				integrates <strong>dnd kit</strong> for smooth drag and drop
				functionality.
			</p>
			<p>
				User authentication is powered by <strong>Supabase</strong>,
				which also handles database and asset storage, while{' '}
				<strong>Resend</strong> is used to send verification emails.
			</p>
		</>
	),
	techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Zustand', 'dnd kit'],
	media: {
		images: {
			desktop: [
				'/projects/taskmate/board.jpg',
				'/projects/taskmate/login.jpg',
				'/projects/taskmate/home.jpg',
				'/projects/taskmate/card.jpg',
				'/projects/taskmate/settings.jpg',
			],
			mobile: [
				'/projects/taskmate/login_mob.jpg',
				'/projects/taskmate/home_mob.jpg',
				'/projects/taskmate/board_mob.jpg',
				'/projects/taskmate/card_mob.jpg',
				'/projects/taskmate/settings_mob.jpg',
			],
		},
	},
};

export default taskmate;
