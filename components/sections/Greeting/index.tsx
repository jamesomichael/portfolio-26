import { useRef } from 'react';
import Link from 'next/link';

import { MdMail } from 'react-icons/md';

import Section from '../../shared/Section';

import useTextFadeIn from '@/hooks/animations/shared/useTextFadeIn';
import useGreetingScroll from '@/hooks/animations/greeting/useGreetingScroll';

const Greeting = () => {
	const ref = useRef(null);
	useGreetingScroll(ref);
	useTextFadeIn(ref, { duration: 2.25, stagger: 0.3 });
	return (
		<Section background="light" className="py-20">
			<div
				ref={ref}
				className="sm:my-36 flex justify-center items-center"
			>
				<div className="rounded-2xl max-w-5xl bg-slate-950 text-white p-8 grid grid-rows-[auto,1fr] gap-6 select-text">
					<h1 className="font-georama leading-none font-stretch-150% font-extrabold text-blue-400 text-[2.8rem] sm:text-7xl lg:text-8xl">
						Hello! 👋
					</h1>
					<div className="text-pretty font-urbanist flex flex-col gap-3 font-stretch-110% text-sm sm:text-base">
						<p className="font-bold text-base sm:text-lg">
							I&apos;m James, a full-stack software engineer based
							in the UK.
						</p>
						<p>
							With six years of industry experience in web
							development, I&apos;ve worked with a range of
							languages, frameworks and tools.
						</p>
						<p>
							My background is in backend development, where I've
							worked extensively with JavaScript, TypeScript,
							Node.js, RESTful APIs, SQL/NoSQL databases and
							Google Cloud Platform. More recently, I&apos;ve
							worked to expand my frontend skills and have gained
							significant hands-on experience with React, Next.js,
							Tailwind CSS and Redux through a portfolio of
							personal projects. You'll find them all here!
						</p>
						<p>
							I&apos;m now ready for my next challenge, one where
							I can combine my backend expertise with my growing
							frontend capabilities.
						</p>
						<Link
							href="mailto:hello@jamesmichael.dev"
							className="font-georama font-stretch-125% flex items-center gap-2 font-bold text-blue-400 sm:text-lg hover:underline"
						>
							<MdMail className="hidden sm:block text-3xl" />
							Interested in working together? Please do get in
							touch!
						</Link>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Greeting;
