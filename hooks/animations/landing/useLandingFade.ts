import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

const useLandingFade = (parentRef: RefObject<HTMLDivElement | null>) => {
	useEffect(() => {
		gsap.fromTo(
			parentRef.current,
			{ scale: 1, y: 0, opacity: 1 },
			{
				scale: 0.25,
				y: -100,
				opacity: 0,
				transformOrigin: 'center center',
				ease: 'none',
				scrollTrigger: {
					trigger: parentRef.current,
					start: '0 0',
					end: 'bottom 40%',
					scrub: true,
				},
			},
		);
	}, []);
};

export default useLandingFade;
