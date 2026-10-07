'use client';
import Greeting from '@/components/sections/Greeting';
import Landing from '@/components/sections/Landing';
import SkillsMarquee from '@/components/sections/skills/SkillsMarquee';
import Projects from '@/components/sections/projects/Projects';
import Experience from '@/components/sections/experience/Experience';
import Education from '@/components/sections/Education';

const Home = () => {
	return (
		<>
			<Landing />
			<Greeting />
			<SkillsMarquee />
			<Projects />
			{/* <Experience /> */}
			{/* <Education /> */}
		</>
	);
};

export default Home;
