import projects from '@/constants/projects';

import Section from '../../Section';
import FeaturedProjectsGrid from '../FeaturedProjectsGrid';
import OtherProjectsGrid from '../OtherProjectsGrid';

import type { Project } from '@/types/projects';

const Projects = () => {
	const featuredProjects = Object.entries(projects).filter(
		([, project]) => project.isFeatured,
	) as [string, Project][];
	const otherProjects = Object.entries(projects).filter(
		([, project]) => !project.isFeatured,
	) as [string, Project][];
	return (
		<Section background="dark" title="Projects">
			<div className="flex flex-col gap-3 lg:gap-4">
				<FeaturedProjectsGrid projects={featuredProjects} />
				<OtherProjectsGrid projects={otherProjects} />
			</div>
		</Section>
	);
};

export default Projects;
