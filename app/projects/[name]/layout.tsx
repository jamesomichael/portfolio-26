import projects from '../../../constants/projects';

import Navbar from '@/components/navbar/Navbar';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;
	const data = projects[name];

	if (!data) return;

	return {
		title: `${data.name} - Portfolio '26 - James Michael`,
	};
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen bg-slate-950">
			<Navbar />
			<div className="h-full pt-12">{children}</div>
		</div>
	);
}
