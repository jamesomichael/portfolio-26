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

interface ProjectMedia {
	images?: {
		desktop?: string[];
		mobile?: string[];
	};
}

export interface Project {
	name: string;
	isFeatured?: boolean;
	branding: ProjectBranding;
	headline: string;
	description?: string;
	externalLinks: ProjectExternalLink[];
	media?: ProjectMedia;
}
