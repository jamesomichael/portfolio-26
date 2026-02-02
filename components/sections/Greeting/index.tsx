import Link from 'next/link';

import { MdMail } from 'react-icons/md';

import Section from '../../shared/Section';

const Greeting = () => {
	return (
		<Section background="light" className="py-20">
			<div className="sm:my-36 flex justify-center items-center">
				<div className="rounded-2xl max-w-5xl bg-slate-950 text-white p-8 grid grid-rows-[auto,1fr] gap-6 select-text">
					<h1 className="font-georama leading-none font-stretch-150% font-extrabold text-blue-400 text-[2.8rem] sm:text-7xl lg:text-8xl">
						Hello! 👋
					</h1>
					<div className="font-urbanist flex flex-col gap-3 font-stretch-110% text-sm sm:text-base">
						<p className="font-bold text-base sm:text-lg">
							I&apos;m James, a Software Engineer based in the UK.
						</p>
						<p>
							With six years of industry experience, I specialise
							in web development and have worked with a range of
							languages, frameworks, and tools throughout my
							career.
						</p>
						<p>
							My background is primarily backend-focused, with
							particular emphasis on JavaScript (Node.js,
							TypeScript) and databases (MySQL, Firestore,
							MongoDB). Recently, I&apos;ve been delving deeper
							into the frontend world, gaining experience with
							technologies like React, Next.js, and Tailwind CSS.
							This portfolio is just one example of my work!
						</p>
						<p>
							I&apos;m now looking to embrace a new challenge
							&mdash; one which allows me to combine my strong
							backend skills with my growing frontend
							capabilities.
						</p>
						<Link
							href="mailto:hello@jamesmichael.dev"
							className="font-georama font-stretch-125% flex items-center gap-2 font-bold text-blue-400 sm:text-lg hover:underline"
						>
							<MdMail className="hidden sm:block text-3xl" />
							Interested in collaborating? Please do get in touch!
						</Link>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Greeting;
