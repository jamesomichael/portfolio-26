export default {
	name: "Portfolio '26",
	branding: {
		projectPage: {
			backgroundGradient: 'from-transparent to-blue-400',
			logo: (
				<span className="font-georama font-stretch-150% font-extrabold text-3xl sm:text-4xl text-blue-400">
					Portfolio
					<span className="font-urbanist font-light text-white">
						{' '}
						&apos;26
					</span>
				</span>
			),
		},
		projectTile: {
			logo: (
				<span className="font-georama font-stretch-150% font-extrabold text-3xl sm:text-4xl lg:text-3xl xl:text-4xl">
					Portfolio
					<span className="font-urbanist font-light"> &apos;26</span>
				</span>
			),
		},
		navbarDropdown: {
			logo: (
				<span className="font-georama font-stretch-150% font-extrabold text-2xl">
					Portfolio
					<span className="font-urbanist font-light"> &apos;26</span>
				</span>
			),
		},
	},
	headline: "You're looking at it!",
	description: (
		<>
			<p>
				A personal portfolio website built with <strong>Next.js</strong>
				, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>
				, designed to showcase my work and skills.
			</p>
			<p>
				It features smooth scrolling, powered by <strong>Lenis</strong>,
				combined with <strong>GSAP</strong> animations.
			</p>
		</>
	),
	techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lenis', 'GSAP'],
};
