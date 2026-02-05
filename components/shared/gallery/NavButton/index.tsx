import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const NavButton = ({
	position,
	onClick,
}: {
	position: 'left' | 'right';
	onClick: React.MouseEventHandler<HTMLElement>;
}) => {
	return (
		<button
			onClick={onClick}
			className={`absolute px-2 bottom-[50%] sm:bottom-[50%] z-50 text-white hover:cursor-pointer ${position === 'left' ? 'left-4' : 'right-4'}`}
		>
			{position === 'left' ? (
				<FaChevronLeft className="w-6 h-6 sm:w-8 md:w-11 sm:h-8 md:h-11 hover:text-blue-400 hover:scale-105 active:scale-95 transition-all duration-150" />
			) : (
				<FaChevronRight className="w-6 h-6 sm:w-8 md:w-11 sm:h-8 md:h-11 hover:text-blue-400 hover:scale-105 active:scale-95 transition-all duration-150" />
			)}
		</button>
	);
};

export default NavButton;
