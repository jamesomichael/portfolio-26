'use client';
import { useParams } from 'next/navigation';

import projects from '@/constants/projects';

const Project = () => {
	const { name } = useParams<{ name: string }>();
	const data = projects[name];
	return (
		<div className="h-full bg-slate-900">
			<div className="text-white">{data.name}</div>
		</div>
	);
};

export default Project;
