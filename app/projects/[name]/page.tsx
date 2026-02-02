'use client';
import { useParams } from 'next/navigation';

import projects from '@/constants/projects';

const Project = () => {
	const { name } = useParams<{ name: string }>();
	const data = projects[name];
	return (
		<div className="h-full bg-slate-900">
			<div
				className={`relative bg-linear-to-b ${data.branding?.projectPage?.backgroundGradient} pb-20`}
			>
				<div className="absolute inset-0 bg-black/80"></div>
				<div className="relative z-40 max-w-7xl mx-auto py-3 sm:py-4 px-3 sm:px-4 flex flex-col gap-4">
					<div className="py-4">{data.branding.projectPage.logo}</div>
					<div className="grid md:grid-cols-[auto_1fr] gap-4 xl:gap-6">
						{data.externalLinks?.length > 0 && (
							<div className="md:w-72 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-3">
								{data.externalLinks.map((link, index) => (
									<a
										key={index}
										href={link.url}
										className="bg-white rounded-lg h-12"
										target="_blank"
									>
										View
									</a>
								))}
							</div>
						)}
						<div>
							{data.headline && (
								<h1 className="pb-3 text-3xl sm:text-4xl font-georama font-bold font-stretch-135% text-white">
									{data.headline}
								</h1>
							)}
							{data.description && (
								<div className="text-slate-100 flex flex-col gap-3 font-urbanist text-sm sm:text-base lg:text-lg">
									{data.description}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
