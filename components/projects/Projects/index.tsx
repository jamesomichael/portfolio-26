import projects from '@/constants/projects';

import Section from '../../Section';
import FeaturedProjectsGrid from '../FeaturedProjectsGrid';

import type { Project } from '@/types/projects';

const Projects = () => {
	const featuredProjects = Object.entries(projects).filter(
		([, project]) => project.isFeatured,
	) as [string, Project][];
	return (
		<Section background="dark" title="Projects">
			<FeaturedProjectsGrid projects={featuredProjects} />
		</Section>
	);
};

export default Projects;
