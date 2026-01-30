export interface Project {
	name: string;
	isFeatured?: boolean;
	projectTile: {
		backgroundGradient?: string;
		logo: React.ReactNode;
	};
}
