import { typeMap } from '@/constants/links';

import type { ProjectExternalLinkType } from '@/types/projects';

const ExternalLink = ({
	url,
	type = 'website',
	label,
}: {
	url: string;
	type?: ProjectExternalLinkType;
	label?: string;
}) => {
	const icon = typeMap[type].icon;
	const displayLabel = label ?? typeMap[type].label;
	return (
		<a
			href={url}
			className="bg-white rounded-lg h-11 sm:h-12 font-georama font-stretch-110% grid grid-cols-[auto_1fr] items-center gap-2 font-semibold px-3 py-2 text-sm sm:text-base hover:bg-white/80 transition-colors duration-150"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="flex items-center">{icon}</div>
			<div className="flex items-center truncate">{displayLabel}</div>
		</a>
	);
};

export default ExternalLink;
