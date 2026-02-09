'use client';
import Greeting from '@/components/sections/Greeting';
import Landing from '@/components/sections/Landing';
import SkillsMarquee from '@/components/sections/skills/SkillsMarquee';
import Projects from '@/components/sections/projects/Projects';
import Experience from '@/components/sections/experience/Experience';
import Loader from '@/components/shared/Loader';

import useWindowLoaded from '@/hooks/useWindowLoaded';

const Home = () => {
	const isLoading = useWindowLoaded();
	return isLoading ? (
		<div className="h-screen">
			<Loader />
		</div>
	) : (
		<>
			<Landing />
			<Greeting />
			<SkillsMarquee />
			<Projects />
			<Experience />
		</>
	);
};

export default Home;
