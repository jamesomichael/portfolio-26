import React, { useRef } from 'react';

import ImageGallery from '@/components/shared/gallery/ImageGallery';
import ExternalLinks from '../ExternalLinks';
import ProjectContent from '../ProjectContent';
import TechStack from '../TechStack';

import useImageFadeIn from '@/hooks/animations/shared/useImageFadeIn';

import type { ProjectExternalLink, ProjectImages } from '@/types/projects';

const ProjectContainer = ({
	name,
	backgroundGradient = 'from-transparent to-slate-400 via-slate-400',
	logo,
	externalLinks = [],
	headline,
	description,
	techStack = [],
	images = { desktop: [], mobile: [] },
}: {
	name: string;
	backgroundGradient?: string;
	logo: React.ReactNode;
	externalLinks?: ProjectExternalLink[];
	headline?: string;
	description?: React.ReactNode;
	techStack?: string[];
	images?: ProjectImages;
}) => {
	const logoRef = useRef(null);
	useImageFadeIn(logoRef, { offsetX: 20, offsetY: 0 });

	const allImages = [...(images.desktop ?? []), ...(images.mobile ?? [])];

	return (
		<>
			<div
				className={`relative bg-linear-to-b ${backgroundGradient} pb-20`}
			>
				<div className="absolute inset-0 bg-black/80"></div>
				<div className="relative z-40 max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 flex flex-col gap-4">
					<div ref={logoRef} className="py-4">
						{logo}
					</div>
					{allImages.length > 0 && (
						<ImageGallery projectName={name} images={allImages} />
					)}
					<div className="grid md:grid-cols-[auto_1fr] gap-6">
						<ExternalLinks links={externalLinks} />
						<ProjectContent
							headline={headline}
							description={description}
						/>
					</div>
				</div>
			</div>
			{techStack.length > 0 && <TechStack technologies={techStack} />}
		</>
	);
};

export default ProjectContainer;
