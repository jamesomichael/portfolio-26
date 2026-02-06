import { useRef, RefObject } from 'react';

import FeaturedProjectTile from '../FeaturedProjectTile';

import useFeaturedProjectsFade from '@/hooks/animations/projects/useFeaturedProjectsFade';

import type { Project } from '@/types/projects';

const FeaturedProjectsGrid = ({
	projects,
	parentRef,
}: {
	projects: [string, Project][];
	parentRef: RefObject<HTMLDivElement | null>;
}) => {
	const refs = useRef<HTMLAnchorElement[]>([]);
	useFeaturedProjectsFade(refs, parentRef);
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
			{projects.map(([key, project], idx) => (
				<FeaturedProjectTile
					key={key}
					ref={(element: HTMLAnchorElement) => {
						refs.current[idx] = element;
					}}
					projectKey={key}
					logo={project.branding.projectTile.logo}
					backgroundGradient={
						project.branding.projectTile.backgroundGradient
					}
				/>
			))}
		</div>
	);
};

export default FeaturedProjectsGrid;
