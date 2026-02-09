import { VerticalTimeline } from 'react-vertical-timeline-component';

import experience from '@/constants/experience';

import Section from '@/components/shared/Section';
import Role from '../Role';

const Experience = () => {
	return (
		<Section title="Experience" background="light">
			{experience.map(
				({
					companyName,
					companyColour,
					logo,
					shouldInvertLogo,
					roles,
				}) => {
					return (
						<VerticalTimeline key={companyName}>
							{roles.map(({ title, period, description }) => {
								return (
									<Role
										key={`${title}_${companyName}`}
										period={period}
										companyColour={companyColour}
										companyLogoUrl={logo}
										companyName={companyName}
										shouldInvertLogo={shouldInvertLogo}
										title={title}
										description={description}
									/>
								);
							})}
						</VerticalTimeline>
					);
				},
			)}
		</Section>
	);
};

export default Experience;
