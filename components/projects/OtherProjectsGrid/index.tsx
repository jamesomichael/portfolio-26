import ProjectTile from '../ProjectTile';

import type { Project } from '@/types/projects';

const OtherProjectsGrid = ({ projects }: { projects: [string, Project][] }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
			{projects.map(([key, project], idx) => (
				<ProjectTile
					key={key}
					projectKey={key}
					logo={project.branding.projectTile.logo}
					isHero={idx === 0}
				/>
			))}
		</div>
	);
};

export default OtherProjectsGrid;
