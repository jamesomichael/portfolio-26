'use client';
import { useParams } from 'next/navigation';

import projects from '@/constants/projects';

import Navbar from '@/components/navbar/Navbar';

const Project = () => {
	const { name } = useParams<{ name: string }>();
	const data = projects[name];
	return (
		<div className="min-h-screen bg-slate-500">
			<Navbar />
			<div>{data.name}</div>
		</div>
	);
};

export default Project;
