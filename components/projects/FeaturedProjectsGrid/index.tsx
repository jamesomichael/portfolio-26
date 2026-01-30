import FeaturedProjectItem from '../FeaturedProjectItem';

import type { Project } from '@/types/projects';

const FeaturedProjectsGrid = ({
	projects,
}: {
	projects: [string, Project][];
}) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
			{projects.map(([key, project]) => (
				<FeaturedProjectItem
					key={key}
					projectKey={key}
					name={project.name}
					logo={project.projectTile.logo}
					backgroundGradient={project.projectTile.backgroundGradient}
				/>
			))}
		</div>
	);
};

export default FeaturedProjectsGrid;
