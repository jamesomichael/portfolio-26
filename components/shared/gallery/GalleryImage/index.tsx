const GalleryImage = ({ imageUrl }: { imageUrl: string }) => {
	return (
		<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-transparent">
			<img
				src={imageUrl}
				className="absolute inset-0 w-full h-full object-contain object-center"
			/>
		</div>
	);
};

export default GalleryImage;
