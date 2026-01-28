import Greeting from '@/components/Greeting';
import Landing from '@/components/Landing';
import SkillsMarquee from '@/components/SkillsMarquee';

const Home = () => {
	return (
		<>
			<Landing />
			<Greeting />
			<SkillsMarquee />
		</>
	);
};

export default Home;
