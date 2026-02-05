import { useState } from 'react';
import Image from 'next/image';

import Loader from '../../Loader';

const GalleryImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className="relative w-full aspect-16/8">
			{isLoading && <Loader />}
			<Image
				src={imageUrl}
				alt={alt}
				fill
				className="rounded object-contain hover:cursor-pointer"
				placeholder="empty"
				priority
				onLoad={() => setIsLoading(false)}
			/>
		</div>
	);
};

export default GalleryImage;
