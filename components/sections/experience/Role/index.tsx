import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { FaBriefcase } from 'react-icons/fa6';

const Role = ({
	period,
	companyColour,
	companyLogoUrl,
	companyName,
	shouldInvertLogo = false,
	title,
	description,
}: {
	period: string;
	companyColour: string;
	companyLogoUrl: string;
	companyName: string;
	shouldInvertLogo?: boolean;
	title: string;
	description: React.ReactNode;
}) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{
				borderRadius: '0.75rem',
			}}
			date={period}
			dateClassName="font-urbanist"
			iconStyle={{
				background: companyColour,
				color: '#fff',
			}}
			icon={<FaBriefcase className="invisible lg:visible" />}
		>
			<img
				src={companyLogoUrl}
				alt={companyName}
				className={`w-34 lg:w-40 mt-2 mb-4 sm:mb-6 ${shouldInvertLogo ? 'invert' : ''}`}
			/>
			<h1 className="vertical-timeline-element-title font-georama text-xl sm:text-2xl font-stretch-130% font-bold text-slate-900">
				{title}
			</h1>
			<div className="font-urbanist flex flex-col text-slate-900">
				{description}
			</div>
		</VerticalTimelineElement>
	);
};

export default Role;
