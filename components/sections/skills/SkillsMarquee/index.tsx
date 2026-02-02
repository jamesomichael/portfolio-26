import Marquee from 'react-fast-marquee';

import skillsMap from '../../../../constants/skills';

import Skill from '../Skill';

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
						{array.map(({ icon, name, gradientTo }, j) => {
							return (
								<Skill
									key={`${j}_name`}
									icon={icon}
									name={name}
									gradientTo={gradientTo}
								/>
							);
						})}
					</Marquee>
				);
			})}
		</div>
	);
};

export default SkillsMarquee;
