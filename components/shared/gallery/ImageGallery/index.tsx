import ReactImageGallery from 'react-image-gallery';

import PlayPauseButton from '../PlayPauseButton';
import FullscreenButton from '../FullscreenButton';
import NavButton from '../NavButton';
import GalleryImage from '../GalleryImage';

const ImageGallery = ({
	projectName,
	images = [],
}: {
	projectName: string;
	images: string[];
}) => {
	const formattedImages = images.map((imageUrl) => ({
		original: imageUrl,
		thumbnail: imageUrl,
	}));
	return (
		<ReactImageGallery
			items={formattedImages}
			showThumbnails={false}
			autoPlay={true}
			lazyLoad={true}
			infinite={true}
			slideDuration={750}
			slideInterval={7500}
			// showBullets={true}
			renderPlayPauseButton={(onClick, isPlaying) => (
				<PlayPauseButton
					key="play-pause-button"
					onClick={onClick}
					isPlaying={isPlaying}
				/>
			)}
			renderFullscreenButton={(onClick, isFullscreen) => (
				<FullscreenButton
					key="fullscreen-button"
					onClick={onClick}
					isFullscreen={isFullscreen}
				/>
			)}
			renderLeftNav={(onClick) => (
				<NavButton
					key="left-nav-button"
					onClick={onClick}
					position="left"
				/>
			)}
			renderRightNav={(onClick) => (
				<NavButton
					key="right-nav-button"
					onClick={onClick}
					position="right"
				/>
			)}
			renderItem={(item) => (
				<GalleryImage alt={projectName} imageUrl={item.original} />
			)}
		/>
	);
};

export default ImageGallery;
