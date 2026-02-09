'use client';
import { useRouter } from 'next/navigation';

import { FaArrowLeft } from 'react-icons/fa6';

import ProjectsDropdown from '../ProjectsDropdown';
import NavbarLogo from '../NavbarLogo';

import useNavbar from '@/hooks/useNavbar';

const Navbar = () => {
	const router = useRouter();
	const showNavbar = useNavbar();
	return (
		<div
			className={`grid fixed top-0 left-0 right-0 z-50 border-b border-slate-900/50 bg-slate-950 h-12 grid-cols-3 px-4 sm:px-6 transform transition-transform duration-300 ${
				showNavbar ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<div className="flex items-center text-white">
				<FaArrowLeft
					title="Back"
					onClick={() => router.back()}
					className="h-5 w-5 text-slate-400 hover:text-white hover:cursor-pointer transition-colors duration-200"
				/>
			</div>
			<div className="flex items-center justify-center">
				<NavbarLogo />
			</div>
			<div className="hidden sm:flex items-center justify-end relative">
				<ProjectsDropdown />
			</div>
		</div>
	);
};

export default Navbar;
