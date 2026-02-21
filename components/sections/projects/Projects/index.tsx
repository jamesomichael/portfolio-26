import { useRef } from 'react';

import projects from '@/constants/projects';

import Section from '../../../shared/Section';
import FeaturedProjectTile from '../FeaturedProjectTile';
import ProjectTile from '../ProjectTile';

import useProjectsFadeIn from '@/hooks/animations/projects/useProjectsFadeIn';

import type { Project } from '@/types/projects';

const Projects = () => {
	const sectionRef = useRef(null);
	const tileRefs = useRef<HTMLAnchorElement[]>([]);

	useProjectsFadeIn(tileRefs, sectionRef);

	const featuredProjects = Object.entries(projects).filter(
		([, project]) => project.isFeatured,
	) as [string, Project][];

	const otherProjects = Object.entries(projects).filter(
		([, project]) => !project.isFeatured,
	) as [string, Project][];

	return (
		<Section background="dark" title="Projects">
			<div ref={sectionRef} className="flex flex-col gap-3 lg:gap-4">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
					{featuredProjects.map(([key, project], idx) => (
						<FeaturedProjectTile
							key={key}
							ref={(element: HTMLAnchorElement) => {
								tileRefs.current[idx] = element;
							}}
							projectKey={key}
							logo={project.branding.projectTile.logo}
							backgroundGradient={
								project.branding.projectTile.backgroundGradient
							}
						/>
					))}
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{otherProjects.map(([key, project], idx) => (
						<ProjectTile
							key={key}
							ref={(element: HTMLAnchorElement) => {
								tileRefs.current[
									idx + featuredProjects.length
								] = element;
							}}
							projectKey={key}
							logo={project.branding.projectTile.logo}
							isHero={idx === 0}
						/>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Projects;
