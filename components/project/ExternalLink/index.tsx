import { forwardRef } from 'react';

import { typeMap } from '@/constants/links';

import type { ProjectExternalLinkType } from '@/types/projects';

interface PropTypes {
	url: string;
	type?: ProjectExternalLinkType;
	label?: string;
}

const ExternalLink = forwardRef<HTMLAnchorElement, PropTypes>(
	({ url, type = 'website', label }, ref) => {
		const icon = typeMap[type].icon;
		const displayLabel = label ?? typeMap[type].label;
		return (
			<a
				ref={ref}
				href={url}
				className="relative overflow-hidden group bg-white rounded-lg h-11 sm:h-12 font-urbanist font-bold grid grid-cols-[auto_1fr] items-center gap-2 px-3 py-2 text-base sm:text-lg"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="rounded-lg absolute inset-0 w-0 bg-linear-to-br from-neutral-200 to-neutral-400/70 transition-all duration-300 ease-in-out group-hover:w-full"></div>
				<div className="relative flex items-center">{icon}</div>
				<div className="relative flex items-center truncate">
					{displayLabel}
				</div>
			</a>
		);
	},
);

export default ExternalLink;
