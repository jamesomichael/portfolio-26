import React from 'react';

import ExternalLinks from '../ExternalLinks';
import ProjectContent from '../ProjectContent';

import type { ProjectExternalLink } from '@/types/projects';

const ProjectContainer = ({
	backgroundGradient = 'from-transparent to-slate-400 via-slate-400',
	logo,
	externalLinks = [],
	headline,
	description,
}: {
	backgroundGradient?: string;
	logo: React.ReactNode;
	externalLinks?: ProjectExternalLink[];
	headline?: string;
	description?: React.ReactNode;
}) => {
	return (
		<div className={`relative bg-linear-to-b ${backgroundGradient} pb-20`}>
			<div className="absolute inset-0 bg-black/80"></div>
			<div className="relative z-40 max-w-7xl mx-auto py-3 sm:py-4 px-3 sm:px-4 flex flex-col gap-4">
				<div className="py-4">{logo}</div>
				<div className="grid md:grid-cols-[auto_1fr] gap-4 xl:gap-6">
					<ExternalLinks links={externalLinks} />
					<ProjectContent
						headline={headline}
						description={description}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
