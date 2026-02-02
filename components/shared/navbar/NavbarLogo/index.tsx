import Link from 'next/link';

const NavbarLogo = () => {
	return (
		<>
			<Link
				href="/"
				className="sm:hidden uppercase font-georama text-white hover:opacity-75 font-light font-stretch-110% text-2xl transition-all duration-150"
			>
				J
				<span className="font-extrabold text-blue-400 font-stretch-130%">
					M
				</span>
			</Link>
			<Link
				href="/"
				className="hidden sm:block uppercase font-georama text-white hover:opacity-75 font-light text-md lg:text-lg xl:text-xl transition-all duration-150 font-stretch-110%"
			>
				James{' '}
				<span className="font-extrabold text-blue-400  font-stretch-130%">
					Michael
				</span>
			</Link>
		</>
	);
};

export default NavbarLogo;
