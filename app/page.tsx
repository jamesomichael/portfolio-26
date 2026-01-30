import Greeting from '@/components/Greeting';
import Landing from '@/components/Landing';
import SkillsMarquee from '@/components/SkillsMarquee';
import Projects from '@/components/projects/Projects';

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
