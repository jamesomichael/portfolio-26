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

interface ExternalLink {
	type: 'website' | 'github' | 'storybook';
	url: string;
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
	externalLinks: ExternalLink[];
	media?: ProjectMedia;
}
