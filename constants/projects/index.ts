import musicmate from './musicmate';
import vault from './vault';
import taskmate from './taskmate';
import portfolio from './portfolio';
import scrobblemate from './scrobblemate';
import mediamate from './mediamate';
import contactVaultAPI from './contact-vault-api';
import githubFinder from './github-finder';
import { Project } from '@/types/projects';

const projects: Record<string, Project> = {
	musicmate,
	vault,
	taskmate,
	'portfolio-26': portfolio,
	'contact-vault-api': contactVaultAPI,
	'github-finder': githubFinder,
	scrobblemate,
	mediamate,
};

export default projects;
