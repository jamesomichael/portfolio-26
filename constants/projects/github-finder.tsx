import { FaGithub } from 'react-icons/fa';

export default {
	name: 'GitHub Finder',
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-red-700',
			logo: (
				<div className="flex items-center text-white gap-3 xl:gap-3.5">
					<FaGithub className="text-4xl md:text-5xl" />
					<span className="font-poppins text-3xl md:text-4xl">
						GitHub Finder
					</span>
				</div>
			),
		},
		projectTile: {
			logo: (
				<div className="flex items-center gap-3 md:gap-3.5 lg:gap-3 xl:gap-3.5">
					<FaGithub className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl" />
					<span className="font-poppins text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
						GitHub Finder
					</span>
				</div>
			),
		},
		navbarDropdown: {
			logo: (
				<div className="flex items-center gap-2.5">
					<FaGithub className="text-3xl" />
					<span className="font-poppins text-2xl">GitHub Finder</span>
				</div>
			),
		},
	},
	externalLinks: [
		{
			url: 'https://github-finder-next.jamesmichael.dev',
			type: 'website',
		},
		{
			url: 'https://github.com/jamesomichael/github-finder-next',
			type: 'github',
		},
	],
	headline: 'Browse GitHub users & repositories.',
	description: (
		<>
			<p>
				A <strong>Next.js</strong> implementation of Brad Traversy's{' '}
				<a
					href="https://github.com/bradtraversy/github-finder"
					target="_blank"
					className="italic hover:underline"
				>
					GitHub Finder
				</a>
				, originally built with React as part of his{' '}
				<a
					href="https://www.udemy.com/course/modern-react-front-to-back"
					target="_blank"
					className="italic hover:underline"
				>
					React Front To Back
				</a>{' '}
				course.
			</p>
			<p>
				This version utilises <strong>Tailwind CSS</strong> for styling,{' '}
				<strong>Zustand</strong> for state management, and includes
				support for dark mode.
			</p>
		</>
	),
	techStack: ['Next.js', 'Tailwind CSS', 'Zustand'],
	media: {
		images: {
			desktop: [
				'/github-finder/home.jpg',
				'/github-finder/search.jpg',
				'/github-finder/user.jpg',
				'/github-finder/user-light.jpg',
			],
		},
		mobile: [
			'/github-finder/home_mob.jpg',
			'/github-finder/search_mob.jpg',
			'/github-finder/user_mob.jpg',
			'/github-finder/user-light_mob.jpg',
		],
	},
};
