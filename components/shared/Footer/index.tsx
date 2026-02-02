import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
	return (
		<footer className="p-10 pb-44 bg-slate-950">
			<div className="max-w-7xl mx-auto grid grid-rows-[auto_auto] sm:grid-rows-none sm:grid-cols-2 gap-3">
				<div className="row-start-2 sm:row-auto h-10 flex items-center justify-center sm:justify-start">
					<span className="font-georama text-slate-400 text-xs sm:text-sm font-stretch-135%">
						&copy; James Michael, {new Date().getFullYear()}
					</span>
				</div>
				<div className="h-10 flex items-center justify-center sm:justify-end gap-10 text-slate-400 text-3xl">
					<Link
						href="https://github.com/jamesomichael"
						rel="noopener noreferrer"
						target="_blank"
						title="GitHub"
						className="hover:text-white transition-colors duration-150"
					>
						<FaGithub />
					</Link>
					<Link
						href="https://linkedin.com/in/jamesomichael"
						rel="noopener noreferrer"
						target="_blank"
						title="LinkedIn"
						className="hover:text-white transition-colors duration-150"
					>
						<FaLinkedin />
					</Link>
					<Link
						href="mailto:hello@jamesmichael.dev"
						rel="noopener noreferrer"
						title="Email"
						className="hover:text-white transition-colors duration-150"
					>
						<IoMdMail />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
