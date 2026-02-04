import type { TechName } from './tech';

interface ProjectBranding {
	projectTile: {
		backgroundGradient?: string;
		logo: React.ReactNode;
	};
	navbarDropdown: {
		logo: React.ReactNode;
	};
	projectPage: {
		backgroundGradient?: string;
		logo: React.ReactNode;
	};
}

export type ProjectExternalLinkType = 'website' | 'github' | 'storybook';

export interface ProjectExternalLink {
	type: ProjectExternalLinkType;
	url: string;
	label?: string;
}

export interface ProjectImages {
	desktop?: string[];
	mobile?: string[];
}

interface ProjectMedia {
	images?: ProjectImages;
}

export interface Project {
	name: string;
	isFeatured?: boolean;
	branding: ProjectBranding;
	headline: string;
	description?: React.ReactNode;
	externalLinks?: ProjectExternalLink[];
	techStack?: string[];
	media?: ProjectMedia;
}
