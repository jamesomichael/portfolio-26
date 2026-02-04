import Link from 'next/link';

const ProjectTile = ({
	projectKey,
	logo,
	isHero = false,
}: {
	projectKey: string;
	logo: React.ReactNode;
	isHero?: boolean;
}) => {
	return (
		<Link
			href={`/projects/${projectKey}`}
			className={`group transition-all duration-200 ease-in-out hover:bg-slate-800 rounded-xl h-20 sm:h-28 lg:h-32 bg-slate-900 flex justify-center items-center ${isHero ? 'col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:h-full' : ''}`}
		>
			<div className="text-slate-300 group-hover:text-slate-200 group-hover:scale-105 transition-all duration-200">
				{logo}
			</div>
		</Link>
	);
};

export default ProjectTile;
