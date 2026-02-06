import { useRef } from 'react';

import projects from '@/constants/projects';

import Section from '../../../shared/Section';
import FeaturedProjectsGrid from '../FeaturedProjectsGrid';
import OtherProjectsGrid from '../OtherProjectsGrid';

import type { Project } from '@/types/projects';

const Projects = () => {
	const ref = useRef(null);

	const featuredProjects = Object.entries(projects).filter(
		([, project]) => project.isFeatured,
	) as [string, Project][];

	const otherProjects = Object.entries(projects).filter(
		([, project]) => !project.isFeatured,
	) as [string, Project][];

	return (
		<Section background="dark" title="Projects">
			<div ref={ref} className="flex flex-col gap-3 lg:gap-4">
				<FeaturedProjectsGrid
					projects={featuredProjects}
					parentRef={ref}
				/>
				<OtherProjectsGrid projects={otherProjects} parentRef={ref} />
			</div>
		</Section>
	);
};

export default Projects;
