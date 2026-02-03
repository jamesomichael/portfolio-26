import React from 'react';

import ImageGallery from '@/components/shared/gallery/ImageGallery';
import ExternalLinks from '../ExternalLinks';
import ProjectContent from '../ProjectContent';

import type { ProjectExternalLink, ProjectImages } from '@/types/projects';

const ProjectContainer = ({
	backgroundGradient = 'from-transparent to-slate-400 via-slate-400',
	logo,
	externalLinks = [],
	headline,
	description,
	images = { desktop: [], mobile: [] },
}: {
	backgroundGradient?: string;
	logo: React.ReactNode;
	externalLinks?: ProjectExternalLink[];
	headline?: string;
	description?: React.ReactNode;
	images?: ProjectImages;
}) => {
	return (
		<div className={`relative bg-linear-to-b ${backgroundGradient} pb-20`}>
			<div className="absolute inset-0 bg-black/80"></div>
			<div className="relative z-40 max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 flex flex-col gap-4">
				<div className="py-4">{logo}</div>
				<ImageGallery
					images={[
						...(images.desktop ?? []),
						...(images.mobile ?? []),
					]}
				/>
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
