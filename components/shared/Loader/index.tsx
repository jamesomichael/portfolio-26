import useLoader from '@/hooks/animations/shared/useLoader';

const Loader = ({ withLogo = true }) => {
	const { fontsReady, wrapperRef, refs } = useLoader();
	return (
		<div className="h-full flex flex-col gap-2 justify-center items-center text-slate-500 text-3xl sm:text-4xl">
			{withLogo && fontsReady && (
				<div
					ref={wrapperRef}
					className="opacity-0 flex justify-center items-center"
				>
					<p
						ref={refs[0]}
						className="font-georama leading-none font-light font-stretch-110%"
					>
						J
					</p>
					<p
						ref={refs[1]}
						className="font-georama leading-none font-extrabold font-stretch-150%"
					>
						M
					</p>
				</div>
			)}
			<div className="relative w-14 sm:w-16 h-0.5 overflow-hidden">
				<div
					className={`absolute h-full w-full bg-slate-500 animate-slide-out`}
				></div>
			</div>
		</div>
	);
};

export default Loader;
