import type { Project } from '@/types/projects';

const scrobblemate: Project = {
	name: 'scrobblemate',
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-red-800 via-red-800',
			logo: (
				<span className="font-unbounded text-3xl md:text-4xl text-red-600 font-black">
					scrobble
					<span className="font-extralight text-white">mate</span>
				</span>
			),
		},
		projectTile: {
			logo: (
				<span className="font-unbounded text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black">
					scrobble
					<span className="font-extralight">mate</span>
				</span>
			),
		},
		navbarDropdown: {
			logo: (
				<span className="font-unbounded font-black text-2xl">
					scrobble
					<span className="font-extralight">mate</span>
				</span>
			),
		},
	},
	headline: 'The data behind your soundtrack.',
	description: (
		<>
			<p>
				<i>scrobblemate</i>, powered by the Last.fm API, is a dashboard
				for showcasing your Last.fm scrobbles.
			</p>
			<p>
				Explore your scrobble history and library, identify listening
				trends over time, and browse your most-played tracks, albums,
				and artists.
			</p>
			<p>
				Built with <strong>Next.js</strong> and{' '}
				<strong>Tailwind CSS</strong>, it uses <strong>Zustand</strong>{' '}
				for lightweight state management and <strong>Motion</strong> for
				subtle animations.
			</p>
		</>
	),
	techStack: ['Next.js', 'Tailwind CSS', 'Zustand', 'Motion'],
	media: {
		images: {
			desktop: [
				'/projects/scrobblemate/home-3.jpg',
				'/projects/scrobblemate/login.jpg',
				'/projects/scrobblemate/home.jpg',
			],
			mobile: [
				'/projects/scrobblemate/home_mob.jpg',
				'/projects/scrobblemate/home-2_mob.jpg',
			],
		},
	},
};

export default scrobblemate;
