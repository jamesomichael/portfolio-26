import React from 'react';

import type { ExternalLink } from '@/types/projects';

const ProjectContainer = ({
	backgroundGradient = 'from-transparent to-slate-400 via-slate-400',
	logo,
	externalLinks = [],
	headline,
	description,
}: {
	backgroundGradient?: string;
	logo: React.ReactNode;
	externalLinks?: ExternalLink[];
	headline?: string;
	description?: React.ReactNode;
}) => {
	return (
		<div className={`relative bg-linear-to-b ${backgroundGradient} pb-20`}>
			<div className="absolute inset-0 bg-black/80"></div>
			<div className="relative z-40 max-w-7xl mx-auto py-3 sm:py-4 px-3 sm:px-4 flex flex-col gap-4">
				<div className="py-4">{logo}</div>
				<div className="grid md:grid-cols-[auto_1fr] gap-4 xl:gap-6">
					{externalLinks.length > 0 && (
						<div className="md:w-72 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-3">
							{externalLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									className="bg-white rounded-lg h-12"
									target="_blank"
									rel="noopener noreferrer"
								>
									View
								</a>
							))}
						</div>
					)}
					<div>
						{headline && (
							<h1 className="pb-3 text-3xl sm:text-4xl font-georama font-bold font-stretch-135% text-white">
								{headline}
							</h1>
						)}
						{description && (
							<div className="text-slate-100 flex flex-col gap-3 font-urbanist text-sm sm:text-base lg:text-lg">
								{description}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
