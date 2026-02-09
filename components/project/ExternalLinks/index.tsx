import { useRef } from 'react';

import ExternalLink from '../ExternalLink';

import useLinksFadeIn from '@/hooks/project/useLinksFadeIn';

import type { ProjectExternalLink } from '@/types/projects';

const ExternalLinks = ({ links }: { links: ProjectExternalLink[] }) => {
	const refs = useRef<(HTMLAnchorElement | null)[]>([]);
	const parentRef = useRef<HTMLDivElement>(null);
	useLinksFadeIn(refs, parentRef);
	return (
		links.length > 0 && (
			<div
				ref={parentRef}
				className="md:w-68 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-3"
			>
				{links.map((link, idx) => (
					<ExternalLink
						key={idx}
						ref={(el) => {
							refs.current[idx] = el;
						}}
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
