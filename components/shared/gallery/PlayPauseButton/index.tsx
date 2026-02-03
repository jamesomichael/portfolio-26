import React from 'react';

import { IoIosPause, IoIosPlay } from 'react-icons/io';

const PlayPauseButton = ({
	onClick,
	isPlaying,
}: {
	onClick: React.MouseEventHandler<HTMLElement>;
	isPlaying: boolean;
}) => {
	return (
		<button
			onClick={onClick}
			className="absolute bottom-6 sm:bottom-8 left-4 z-50 text-white hover:cursor-pointer"
		>
			{isPlaying ? (
				<IoIosPause className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-400 hover:scale-110 active:scale-95 transition-all duration-150" />
			) : (
				<IoIosPlay className="w-6 h-6 sm:w-7 sm:h-7 hover:text-blue-400 hover:scale-110 active:scale-95 transition-all duration-150" />
			)}
		</button>
	);
};

export default PlayPauseButton;
