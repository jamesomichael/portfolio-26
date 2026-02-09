import { useRef } from 'react';

import { FaCircleInfo } from 'react-icons/fa6';

import ExternalLink from '../ExternalLink';

import useLinksFadeIn from '@/hooks/animations/project/useLinksFadeIn';

import type { ProjectExternalLink } from '@/types/projects';

const ExternalLinks = ({ links }: { links: ProjectExternalLink[] }) => {
	const refs = useRef<(HTMLAnchorElement | null)[]>([]);
	const parentRef = useRef<HTMLDivElement>(null);
	useLinksFadeIn(refs, parentRef);
	return links.length > 0 ? (
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
	) : (
		<div className="bg-linear-to-b from-slate-700 to-slate-800 text-white rounded-xl md:w-68 h-fit flex gap-3 justify-start lg:justify-center items-center p-4">
			<FaCircleInfo className="w-7 h-7 lg:w-8 lg:h-8" />
			<span className="font-urbanist font-semibold leading-tight">
				Source code is currently unavailable.
			</span>
		</div>
	);
};

export default ExternalLinks;
