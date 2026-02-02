import Greeting from '@/components/sections/Greeting';
import Landing from '@/components/sections/Landing';
import SkillsMarquee from '@/components/sections/skills/SkillsMarquee';
import Projects from '@/components/sections/projects/Projects';

const Home = () => {
	return (
		<>
			<Landing />
			<Greeting />
			<SkillsMarquee />
			<Projects />
		</>
	);
};

export default Home;
