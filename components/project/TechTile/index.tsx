import React from 'react';

import { RiToolsLine } from 'react-icons/ri';

const TechTile = ({
	icon = <RiToolsLine className="text-slate-400 w-20 h-20 sm:w-24 sm:h-24" />,
	name,
	gradientTo = 'to-slate-400/45',
}: {
	icon?: React.ReactNode;
	name: string;
	gradientTo?: string;
}) => {
	return (
		<div
			className={`relative rounded-xl sm:rounded-2xl bg-linear-to-b from-slate-900 ${gradientTo} h-44 w-40 sm:h-48 sm:w-44 grid grid-rows-[1fr_auto]`}
		>
			<div className="absolute inset-0 bg-linear-to-b from-transparent to-black/45 rounded-xl sm:rounded-2xl"></div>
			<div className="relative z-40 flex justify-center items-center">
				{icon}
			</div>
			<div className="relative z-40 h-11 px-2 pb-6 flex justify-center items-center">
				<span className="line-clamp-2 font-georama text-sm sm:text-base leading-tight text-center font-bold font-stretch-125% text-slate-200">
					{name}
				</span>
			</div>
		</div>
	);
};

export default TechTile;
