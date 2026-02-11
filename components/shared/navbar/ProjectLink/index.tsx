import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProjectLink = ({
	projectKey,
	logo,
}: {
	projectKey: string;
	logo: React.ReactNode;
}) => {
	const pathname = usePathname();

	const isActiveProject = pathname === `/projects/${projectKey}`;

	return (
		<Link
			key={projectKey}
			href={`/projects/${projectKey}`}
			className={`group/project transition-colors duration-200 hover:bg-slate-800 flex justify-center items-center rounded-xl h-14 w-full ${isActiveProject ? 'bg-slate-700 pointer-events-none' : ''}`}
		>
			<div
				className={`w-full flex justify-center items-center group-hover/project:scale-110 transition-transform duration-200 ease-in-out ${isActiveProject ? 'text-white' : 'text-slate-300 group-hover/project:text-white'}`}
			>
				{logo}
			</div>
		</Link>
	);
};

export default ProjectLink;
