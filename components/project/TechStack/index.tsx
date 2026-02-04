import techMap from '@/constants/tech';

import Section from '@/components/shared/Section';
import TechTile from '../TechTile';

import type { TechName } from '@/types/tech';

const TechStack = ({ technologies }: { technologies: string[] }) => {
	return (
		<Section title="Technologies">
			<div className="flex flex-wrap justify-center gap-6 sm:gap-8">
				{technologies.map((name) => {
					const techDetails = techMap[name as TechName];
					return (
						<TechTile
							key={name}
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
