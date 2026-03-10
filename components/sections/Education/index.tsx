import { useRef } from 'react';

import Section from '@/components/shared/Section';

import useTextFadeIn from '@/hooks/animations/shared/useTextFadeIn';
import useImageFadeIn from '@/hooks/animations/shared/useImageFadeIn';

const Education = () => {
	const parentRef = useRef(null);
	const imageRef = useRef(null);
	useTextFadeIn(parentRef, { start: 'top 45%', end: 'top 20%' });
	useImageFadeIn(imageRef, {
		start: 'top 70%',
		end: 'top 60%',
		duration: 2,
	});
	return (
		<Section background="dark" title="Education">
			<div
				ref={parentRef}
				className="lg:pt-5 lg:pb-10 flex flex-col lg:grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-8"
			>
				<div className="flex justify-center items-center lg:justify-end lg:items-start">
					<div ref={imageRef} className="bg-[#242f60] rounded-2xl">
						<img
							src="/swansea-university-logo-horizontal.svg"
							alt="Swansea University"
							className="w-70 sm:w-80 px-8 py-6"
						/>
					</div>
				</div>
				<div className="select-text flex flex-col gap-4 lg:gap-6 justify-start items-start">
					<div className="flex flex-col gap-1 lg:gap-2 text-left">
						<span className="font-georama font-stretch-130% font-bold text-xl sm:text-2xl lg:text-3xl text-blue-400">
							BSc (Hons) Computer Science
						</span>
						<span className="font-urbanist font-medium text-lg sm:text-xl lg:text-2xl text-slate-200">
							First-Class Honours
						</span>
						<span className="font-urbanist font-semibold text-slate-400">
							2013 - 2017
						</span>
					</div>
					<div className="text-pretty text-left font-urbanist flex flex-col gap-4 text-sm sm:text-base text-white">
						<p>
							During my four years at university, I gained
							practical experience with programming languages such
							as Java, C++, C#, Python, and JavaScript.
						</p>
						<p>I studied numerous modules, including:</p>
						<ul className="list-inside list-disc pl-5">
							<li>
								<i>Algorithms</i>
							</li>
							<li>
								<i>Programming 1 & 2</i> (Java)
							</li>
							<li>
								<i>Advanced Object-Oriented Programming</i>{' '}
								(Java & C++)
							</li>
							<li>
								<i>Cryptography and IT-Security</i>
							</li>
							<li>
								<i>Database Systems</i>
							</li>
						</ul>
						<p>
							For my dissertation and final-year project,{' '}
							<i>&quot;How Happy Are We?&quot;</i>, I developed an
							Android mobile application that explored personal
							sentiment analysis using Twitter data. It adapted{' '}
							<a
								href="http://dmrussell.net/CHI2010/docs/p287.pdf"
								rel="noopener noreferrer"
								target="_blank"
								className="italic hover:underline"
							>
								ADI Kramer's happiness equation
							</a>{' '}
							to categorise followed accounts into one of five
							groups, ultimately forming a sentiment scale ranging
							from 'Very Negative' to 'Very Positive'.
						</p>
						<p>
							This degree provided me with a strong foundation in
							the fundamentals of programming, problem-solving,
							software design, and testing practices - skills I
							have continued to build upon throughout my career.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Education;
