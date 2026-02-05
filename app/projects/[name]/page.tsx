'use client';
import { useParams } from 'next/navigation';

import projects from '@/constants/projects';

import ProjectContainer from '@/components/project/ProjectContainer';

const Project = () => {
	const { name } = useParams<{ name: string }>();
	const data = projects[name];

	if (!data) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<span className="font-georama font-stretch-140% text-slate-400 font-medium text-lg">
					Project not found.
				</span>
			</div>
		);
	}

	const { branding, externalLinks, headline, description, techStack, media } =
		data;
	return (
		<div className="h-full bg-slate-900">
			<ProjectContainer
				name={name}
				backgroundGradient={branding?.projectPage?.backgroundGradient}
				logo={branding?.projectPage?.logo}
				externalLinks={externalLinks}
				headline={headline}
				description={description}
				techStack={techStack}
				images={media?.images}
			/>
		</div>
	);
};

export default Project;
