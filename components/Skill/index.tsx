import React from 'react';

const Skill = ({
	icon,
	gradientTo = 'to-slate-950',
	name,
}: {
	icon: React.ReactNode;
	gradientTo?: string;
	name: string;
}) => {
	return (
		<div
			className={`rounded-lg bg-linear-190 from-slate-950 ${gradientTo} mx-2.5 sm:mx-3.5 flex justify-center items-center gap-3 sm:gap-3.5 px-4 py-3.5 sm:px-5 sm:py-4 will-change-transform`}
		>
			<div className="w-8 h-8 sm:w-11 sm:h-11 flex justify-center items-center">
				{icon}
			</div>
			<span className="font-georama font-bold font-stretch-125% text-slate-300 sm:text-lg">
				{name}
			</span>
		</div>
	);
};

export default Skill;
