interface BaseProject {
	name: string;
	projectTile: {
		backgroundGradient: string;
		logo: React.ReactNode;
	};
}

export type Project =
	| (BaseProject & { isFeatured: false })
	| (BaseProject & { isFeatured: true });
