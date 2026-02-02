export default {
	name: 'taskmate',
	isFeatured: true,
	branding: {
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
};
