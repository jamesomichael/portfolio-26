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
			className={`relative rounded-xl bg-linear-190 from-slate-950 ${gradientTo} mx-2.5 sm:mx-3.5 flex justify-center items-center gap-3 sm:gap-3.5 px-4 py-3.5 sm:px-5 sm:py-4 will-change-transform`}
		>
			<div className="absolute inset-0 bg-black/50 rounded-xl"></div>
			<div className="relative z-40 w-8 h-8 sm:w-11 sm:h-11 flex justify-center items-center [&>svg]:w-full [&>svg]:h-full [&>img]:max-w-full [&>img]:max-h-full">
				{icon}
			</div>
			<span className="relative z-40 font-georama font-bold font-stretch-125% text-slate-300 sm:text-lg">
				{name}
			</span>
		</div>
	);
};

export default Skill;
