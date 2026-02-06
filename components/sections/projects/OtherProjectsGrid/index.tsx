import { RefObject, useRef } from 'react';

import ProjectTile from '../ProjectTile';

import useOtherProjectsFade from '@/hooks/animations/projects/useOtherProjectsFade';

import type { Project } from '@/types/projects';

const OtherProjectsGrid = ({
	projects,
	parentRef,
}: {
	projects: [string, Project][];
	parentRef: RefObject<HTMLDivElement | null>;
}) => {
	const refs = useRef<HTMLAnchorElement[]>([]);
	useOtherProjectsFade(refs, parentRef);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
			{projects.map(([key, project], idx) => (
				<ProjectTile
					key={key}
					ref={(element: HTMLAnchorElement) => {
						refs.current[idx] = element;
					}}
					projectKey={key}
					logo={project.branding.projectTile.logo}
					isHero={idx === 0}
				/>
			))}
		</div>
	);
};

export default OtherProjectsGrid;
