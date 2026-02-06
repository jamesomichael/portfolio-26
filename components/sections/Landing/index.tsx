'use client';
import { useRef } from 'react';

import { FaAnglesDown } from 'react-icons/fa6';

import Section from '../../shared/Section';
import StretchText from '../../shared/StretchText';

import useScrollIconFade from '@/hooks/animations/landing/useScrollIconFade';
import useLandingFade from '@/hooks/animations/landing/useLandingFade';
import useTextFadeIn from '@/hooks/animations/shared/useTextFadeIn';

const Landing = () => {
	const ref = useRef(null);
	const scrollIconRef = useScrollIconFade(ref);
	useLandingFade(ref);
	useTextFadeIn(ref, { duration: 3.5 });
	return (
		<Section>
			<div
				ref={ref}
				className="h-screen flex justify-center items-center"
			>
				<div className="flex flex-col sm:flex-row sm:gap-5 font-georama text-center leading-none uppercase sm:wrap-break-word text-[2.7rem] sm:text-6xl md:text-7xl lg:text-8xl text-neutral-200 font-extralight">
					<StretchText
						text="James"
						className="opacity-0 inline-block font-stretch-110%"
						delay={4}
					/>
					<StretchText
						text="Michael"
						className="opacity-0 inline-block text-blue-400 font-stretch-130% font-extrabold"
						delay={4}
					/>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div
					ref={scrollIconRef}
					className="text-slate-400 absolute bottom-8 text-xl animate-bounce"
				>
					<FaAnglesDown className="h-5 w-5 sm:h-6 sm:w-6" />
				</div>
			</div>
		</Section>
	);
};

export default Landing;
