import projects from '../../../../constants/projects';

import ProjectLink from '../ProjectLink';

const ProjectsDropdown = () => {
	const projectsArray = Object.entries(projects);
	return (
		<div className="relative group/dropdown">
			<span className="font-urbanist text-slate-400 font-bold group-hover/dropdown:text-white transition-all duration-150 hover:cursor-pointer">
				Projects
			</span>
			<div className="transition-all duration-100 absolute top-9 right-0 rounded-xl z-50 bg-slate-950 p-2 w-80 flex flex-col gap-1.5 invisible group-hover/dropdown:visible">
				{projectsArray?.map(([key, project]) => {
					return (
						<ProjectLink
							key={key}
							projectKey={key}
							logo={project.branding.navbarDropdown.logo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectsDropdown;
