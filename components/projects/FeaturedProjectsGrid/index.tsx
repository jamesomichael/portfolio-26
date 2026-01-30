import FeaturedProjectTile from '../FeaturedProjectTile';

import type { Project } from '@/types/projects';

const FeaturedProjectsGrid = ({
	projects,
}: {
	projects: [string, Project][];
}) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
			{projects.map(([key, project]) => (
				<FeaturedProjectTile
					key={key}
					projectKey={key}
					logo={project.projectTile.logo}
					backgroundGradient={project.projectTile.backgroundGradient}
				/>
			))}
		</div>
	);
};

export default FeaturedProjectsGrid;
