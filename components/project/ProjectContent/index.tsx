import React from 'react';

const ProjectContent = ({
	headline,
	description,
}: {
	headline?: string;
	description?: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-3">
			{headline && (
				<h1 className="pb-3 text-3xl sm:text-4xl font-georama font-bold font-stretch-135% text-white">
					{headline}
				</h1>
			)}
			{description && (
				<div className="text-slate-100 flex flex-col gap-3 font-urbanist text-sm sm:text-base lg:text-lg">
					{description}
				</div>
			)}
		</div>
	);
};

export default ProjectContent;
