import { FaGithub } from 'react-icons/fa';

export default {
	name: 'GitHub Finder',
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
};
