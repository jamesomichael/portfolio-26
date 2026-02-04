'use client';
import Section from '../../shared/Section';
import StretchText from '../../shared/StretchText';

const Landing = () => {
	return (
		<Section>
			<div className="h-screen flex justify-center items-center">
				<div className="flex flex-col sm:flex-row sm:gap-5 font-georama text-center leading-none uppercase sm:wrap-break-word text-[2.7rem] sm:text-6xl md:text-7xl lg:text-8xl text-neutral-200 font-extralight">
					<StretchText
						text="James"
						className="inline-block font-stretch-110%"
						delay={4}
					/>
					<StretchText
						text="Michael"
						className="inline-block text-blue-400 font-stretch-130% font-extrabold"
						delay={4}
					/>
				</div>
			</div>
		</Section>
	);
};

export default Landing;
