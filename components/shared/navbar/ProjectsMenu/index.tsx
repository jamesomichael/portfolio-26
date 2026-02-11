import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { IoIosClose } from 'react-icons/io';

import projects from '@/constants/projects';

import ProjectLink from '../../navbar/ProjectLink';

import useProjectsMenu from '@/hooks/useProjectsMenu';

const ProjectsMenu = () => {
	const ref = useRef(null);
	const { isOpen, open, close } = useProjectsMenu(ref);
	const projectsArray = Object.entries(projects);
	return (
		<>
			<div onClick={open}>
				<span className="font-urbanist text-slate-400 font-bold hover:text-white transition-all duration-150 hover:cursor-pointer">
					Projects
				</span>
			</div>
			{isOpen &&
				createPortal(
					<div
						ref={ref}
						className="fixed inset-0 ml-auto w-full sm:w-96 z-50 h-screen bg-slate-950"
					>
						<div
							onClick={close}
							className="absolute right-0 p-2 text-slate-400 hover:text-white hover:cursor-pointer"
						>
							<IoIosClose className="h-10 w-10" />
						</div>
						<div className="flex flex-col justify-center w-full h-full gap-1.5 p-4">
							{projectsArray?.map(([key, project]) => {
								return (
									<ProjectLink
										key={key}
										projectKey={key}
										logo={
											project.branding.navbarDropdown.logo
										}
									/>
								);
							})}
						</div>
					</div>,
					document.body,
				)}
		</>
	);
};

export default ProjectsMenu;
