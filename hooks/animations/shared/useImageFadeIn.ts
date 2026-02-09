import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

const useImageFadeIn = (
	ref: RefObject<HTMLDivElement | null>,
	{
		duration = 1.5,
		stagger = 0.1,
		start = 'top 70%',
		end = 'top 45%',
		ease = 'power4.out',
		offsetX = 0,
		offsetY = 20,
	} = {},
	scrub = false,
) => {
	useEffect(() => {
		const el = ref.current;
		gsap.fromTo(
			el,
			{ opacity: 0, x: offsetX, y: offsetY },
			{
				opacity: 1,
				x: 0,
				y: 0,
				duration,
				stagger,
				ease,
				scrollTrigger: {
					trigger: ref.current,
					start,
					end,
					scrub,
				},
			},
		);
	}, []);
};

export default useImageFadeIn;
