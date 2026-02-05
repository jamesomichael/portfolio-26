import experience from '@/constants/experience';

import Section from '@/components/shared/Section';

const Experience = () => {
	return (
		<Section title="Experience" background="light">
			{experience.map(({ companyName, logo, roles }) => {
				return (
					<div key={companyName}>
						<div className="px-8 flex flex-col justify-center items-center">
							<img
								src={logo}
								alt={companyName}
								className="w-72 lg:w-80"
							/>
						</div>
						<div className="flex flex-col gap-20">
							{roles.map(({ title, period, description }) => {
								// return (
								// 	<div
								// 		key={`${title}_${companyName}`}
								// 		className="flex flex-col gap-2 bg-blue-200 rounded-2xl px-8 py-6"
								// 	>
								// 		<span className="font-georama text-xl sm:text-2xl font-stretch-130% font-bold">
								// 			{title}
								// 		</span>
								// 		<span className="font-urbanist font-semibold text-slate-500">
								// 			{period}
								// 		</span>
								// 		<div className="font-urbanist flex flex-col gap-2">
								// 			{description}
								// 		</div>
								// 	</div>
								// );
								return (
									<div
										key={`${title}_${companyName}`}
										className="flex flex-col lg:grid lg:grid-cols-[auto_1fr] gap-3 lg:gap-6"
									>
										<div className="flex flex-col items-start gap-1 lg:items-end lg:w-96 lg:text-right">
											<span className="font-georama text-xl sm:text-2xl font-stretch-130% font-bold">
												{title}
											</span>
											<span className="font-urbanist font-semibold text-slate-500 text-sm md:text-base">
												{period}
											</span>
											<div></div>
										</div>
										<div className="font-urbanist flex flex-col gap-4 text-sm sm:text-base lg:text-lg">
											{description}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</Section>
	);
};

export default Experience;
