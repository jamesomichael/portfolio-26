import { IoShieldHalfSharp } from 'react-icons/io5';

export default {
	name: 'vault',
	isFeatured: true,
	projectTile: {
		backgroundGradient: 'from-blue-200 to-blue-300',
		logo: (
			<div className="flex items-center gap-2 text-blue-300 group-hover:text-slate-800 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
				<IoShieldHalfSharp />
				<span className="font-hubot">Vault</span>
			</div>
		),
	},
};
