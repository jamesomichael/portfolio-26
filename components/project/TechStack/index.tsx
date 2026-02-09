import { useRef } from 'react';

import techMap from '@/constants/tech';

import Section from '@/components/shared/Section';
import TechTile from '../TechTile';

import useTechStackFadeIn from '@/hooks/animations/project/useTechStackFadeIn';

import type { TechName } from '@/types/tech';

const TechStack = ({ technologies }: { technologies: string[] }) => {
	const refs = useRef<(HTMLDivElement | null)[]>([]);
	const parentRef = useRef(null);
	useTechStackFadeIn(refs, parentRef);
	return (
		<Section title="Technologies">
			<div
				ref={parentRef}
				className="flex flex-wrap justify-center gap-6 sm:gap-8"
			>
				{technologies.map((name, idx) => {
					const techDetails = techMap[name as TechName];
					return (
						<TechTile
							key={name}
							ref={(el) => {
								refs.current[idx] = el;
							}}
							icon={techDetails?.icon}
							gradientTo={techDetails?.gradientTo}
							name={name}
						/>
					);
				})}
			</div>
		</Section>
	);
};

export default TechStack;
