import ExternalLink from '../ExternalLink';

import type { ProjectExternalLink } from '@/types/projects';

const ExternalLinks = ({ links }: { links: ProjectExternalLink[] }) => {
	return (
		links.length > 0 && (
			<div className="md:w-68 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-3">
				{links.map((link, idx) => (
					<ExternalLink
						key={idx}
						url={link.url}
						type={link.type}
						label={link.label}
					/>
				))}
			</div>
		)
	);
};

export default ExternalLinks;
