import React from 'react';

import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';

const FullscreenButton = ({
	onClick,
	isFullscreen,
}: {
	onClick: React.MouseEventHandler<HTMLElement>;
	isFullscreen: boolean;
}) => {
	return (
		<button
			onClick={onClick}
			className="absolute bottom-4 sm:bottom-6 right-6 sm:right-8 z-50 text-white hover:cursor-pointer"
		>
			{isFullscreen ? (
				<RxExitFullScreen className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-400 hover:scale-105 active:scale-95 transition-all duration-150" />
			) : (
				<RxEnterFullScreen className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-400 hover:scale-105 active:scale-95 transition-all duration-150" />
			)}
		</button>
	);
};

export default FullscreenButton;
