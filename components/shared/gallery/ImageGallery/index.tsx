import ReactImageGallery from 'react-image-gallery';

import PlayPauseButton from '../PlayPauseButton';
import FullscreenButton from '../FullscreenButton';
import NavButton from '../NavButton';
import GalleryImage from '../GalleryImage';

const ImageGallery = ({ images = [] }: { images: string[] }) => {
	const formattedImages = images.map((imageUrl) => ({
		original: imageUrl,
		thumbnail: imageUrl,
	}));
	return (
		<ReactImageGallery
			items={formattedImages}
			showThumbnails={false}
			autoPlay={true}
			slideDuration={750}
			slideInterval={5000}
			showBullets={true}
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
			renderItem={(item) => <GalleryImage imageUrl={item.original} />}
		/>
	);
};

export default ImageGallery;
