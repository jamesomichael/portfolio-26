import { GoAlertFill } from 'react-icons/go';

import type { Project } from '@/types/projects';

const musicmate: Project = {
	name: 'musicmate',
	isFeatured: true,
	branding: {
		projectPage: {
			backgroundGradient:
				'from-transparent to-spotify-green via-spotify-green/55',
			logo: (
				<span className="font-unbounded text-3xl sm:text-4xl text-spotify-green group-hover:text-black font-black">
					music
					<span className="text-white group-hover:text-black font-extralight">
						mate
					</span>
				</span>
			),
		},
		projectTile: {
			backgroundGradient: 'from-spotify-green to-spotify-green/50',
			logo: (
				<span className="font-unbounded text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-spotify-green group-hover:text-black font-black">
					music
					<span className="text-white group-hover:text-black font-extralight">
						mate
					</span>
				</span>
			),
		},
		navbarDropdown: {
			logo: (
				<span className="font-unbounded font-black text-2xl">
					music
					<span className="font-extralight">mate</span>
				</span>
			),
		},
	},
	headline: 'A web-based Spotify clone.',
	description: (
		<>
			<p className="my-2 flex items-center gap-2 text-black font-georama font-stretch-120% font-medium text-sm sm:text-base md:text-sm lg:text-base bg-yellow-500 p-4 rounded-xl">
				<GoAlertFill className="w-6 h-6" />
				Access to musicmate is currently by invitation only.
			</p>
			<p>
				Built with <strong>Next.js</strong>,{' '}
				<strong>Tailwind CSS</strong>, <strong>Redux Toolkit</strong>,
				and <strong>TypeScript</strong>, <i>musicmate</i> leverages
				Spotify's Web API and Web Playback SDK to deliver a faithful,
				Spotify-like experience in the browser.
			</p>
			<p>
				Browse your library, search for playlists, artists, albums, and
				tracks, and explore your top artists and most-played tracks. If
				you're a Spotify Premium user, you can also enjoy full playback
				control - play, pause, skip, seek, change volume, and toggle
				shuffle or repeat - with playback synchronised across all your
				devices.
			</p>
			<p>
				Under the hood, infinite scroll handles pagination,{' '}
				<strong>Motion</strong> adds subtle animations, and{' '}
				<strong>Storybook</strong> showcases individual components.
			</p>
		</>
	),
	externalLinks: [
		{
			type: 'website',
			url: 'https://musicmate.jamesmichael.dev',
		},
		{
			type: 'github',
			url: 'https://github.com/jamesomichael/musicmate-enhanced',
		},
		{
			type: 'storybook',
			url: 'https://jamesomichael.github.io/musicmate-enhanced',
		},
	],
	techStack: [
		'Next.js',
		'Redux Toolkit',
		'TypeScript',
		'Tailwind CSS',
		'Motion',
		'React Infinite Scroller',
		'Spotify Web API',
		'Spotify Web Playback SDK',
		'Storybook',
		'React Testing Library',
		'Jest',
	],
	media: {
		images: {
			desktop: [
				'/projects/musicmate/artist-fontaines-dc.jpg',
				'/projects/musicmate/album-arctic-monkeys.jpg',
				'/projects/musicmate/album-fontaines-dc.jpg',
				'/projects/musicmate/single-jungle.jpg',
				// '/projects/musicmate/artist-beatles.jpg',
				'/projects/musicmate/artist-expanded-black-keys.jpg',
				'/projects/musicmate/artist-gorillaz.jpg',
				'/projects/musicmate/artist-kendrick.jpg',
				// '/projects/musicmate/artist-qotsa.jpg',
				'/projects/musicmate/categories.jpg',
				'/projects/musicmate/discography-arctic-monkeys-1.jpg',
				'/projects/musicmate/discography-arctic-monkeys-2.jpg',
				'/projects/musicmate/discography-arctic-monkeys-3.jpg',
				// '/projects/musicmate/playlist-hayley.jpg',
				'/projects/musicmate/playlist-kaytra.jpg',
				'/projects/musicmate/search-nirvana.jpg',
				'/projects/musicmate/search-results-albums-nirvana.jpg',
				'/projects/musicmate/search-results-artists-nirvana.jpg',
				'/projects/musicmate/search-results-playlists-nirvana.jpg',
				'/projects/musicmate/search-results-tracks-nirvana.jpg',
				'/projects/musicmate/login-cropped.jpg',
				// '/projects/musicmate/search-wolf-alice.jpg',
			],
			mobile: [
				'/projects/musicmate/mob/album-linkin-park_mob.jpg',
				'/projects/musicmate/mob/album-kaytra_mob.jpg',
				'/projects/musicmate/mob/single-jungle_mob.jpg',
				'/projects/musicmate/mob/artist-qotsa_mob.jpg',
				'/projects/musicmate/mob/artist-arctic-monkeys_mob.jpg',
				'/projects/musicmate/mob/artist-gorillaz-1_mob.jpg',
				'/projects/musicmate/mob/artist-gorillaz-2_mob.jpg',
				'/projects/musicmate/mob/artist-gorillaz-3_mob.jpg',
				'/projects/musicmate/mob/artist-gorillaz-4_mob.jpg',
				'/projects/musicmate/mob/categories_mob.jpg',
				'/projects/musicmate/mob/library-1_mob.jpg',
				'/projects/musicmate/mob/library-2_mob.jpg',
				'/projects/musicmate/mob/library-3_mob.jpg',
				'/projects/musicmate/mob/search-qotsa_mob.jpg',
				'/projects/musicmate/mob/search-results-playlists-qotsa_mob.jpg',
				'/projects/musicmate/mob/search-results-artists-qotsa_mob.jpg',
				'/projects/musicmate/mob/search-results-albums-qotsa_mob.jpg',
				'/projects/musicmate/mob/search-results-tracks-qotsa_mob.jpg',
				'/projects/musicmate/mob/player-wolf-alice_mob.jpg',
				'/projects/musicmate/mob/player-gorillaz_mob.jpg',
				'/projects/musicmate/mob/login_mob.jpg',
			],
		},
	},
};

export default musicmate;
