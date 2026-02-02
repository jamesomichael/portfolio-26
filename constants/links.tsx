import { TbExternalLink } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa6';
import { SiStorybook } from 'react-icons/si';

export const typeMap = {
	website: {
		icon: <TbExternalLink className="h-7 w-7" />,
		label: 'Visit',
	},
	github: {
		icon: <FaGithub className="h-7 w-7" />,
		label: 'View source code',
	},
	storybook: {
		icon: <SiStorybook className="h-7 w-7" />,
		label: 'View Storybook',
	},
};
