import Marquee from 'react-fast-marquee';

import skillsMap from '../../constants/skills';

const SkillsMarquee = () => {
	const skills = Object.values(skillsMap);
	return (
		<div className="bg-blue-400 w-full flex flex-col gap-4 sm:gap-6 justify-center items-center py-6 sm:py-8 overflow-hidden whitespace-nowrap">
			{skills.map((array, i) => {
				return (
					<Marquee
						key={i}
						direction={(i + 1) % 2 === 0 ? 'right' : 'left'}
						pauseOnHover={true}
						autoFill={true}
						speed={65 - (i + 1) * 5}
						className="flex justify-start overflow-hidden w-full will-change-transform"
					>
						{array.map((item, j) => {
							return (
								<div
									key={j}
									className="grid grid-cols-[auto_1fr] mx-2.5 gap-3 sm:mx-4 sm:gap-4 items-center justify-center px-4 py-3 sm:px-5 sm:py-4 bg-slate-950 rounded will-change-transform"
								>
									<div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center">
										{item.icon}
									</div>
									<span className="font-georama font-bold font-stretch-125% text-neutral-300 sm:text-xl">
										{item.name}
									</span>
								</div>
							);
						})}
					</Marquee>
				);
			})}
		</div>
	);
};

export default SkillsMarquee;
