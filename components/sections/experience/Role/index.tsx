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
				padding: 0,
			}}
			contentArrowStyle={{ borderRight: `7px solid ${companyColour}` }}
			date={period}
			dateClassName="font-urbanist"
			iconStyle={{
				background: '#51a2ff',
				color: '#fff',
			}}
			icon={<FaBriefcase className="invisible lg:visible" />}
		>
			<div
				className="h-17 sm:h-18 px-4 sm:px-6 flex items-center rounded-t-xl"
				style={{ backgroundColor: companyColour }}
			>
				<img
					src={companyLogoUrl}
					alt={companyName}
					className={`w-34 sm:w-40 ${shouldInvertLogo ? 'invert' : ''}`}
				/>
			</div>
			<div className="p-4 sm:p-6">
				<h1 className="vertical-timeline-element-title select-text font-georama text-xl sm:text-2xl font-stretch-130% font-bold text-slate-900">
					{title}
				</h1>
				<div className="text-pretty role-description font-urbanist select-text flex flex-col text-slate-900">
					{description}
				</div>
			</div>
		</VerticalTimelineElement>
	);
};

export default Role;
