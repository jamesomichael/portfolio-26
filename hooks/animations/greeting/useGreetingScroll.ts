import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useGreetingScroll = (parentRef: RefObject<HTMLDivElement | null>) => {
	useEffect(() => {
		const el = parentRef.current;
		gsap.fromTo(
			el,
			{ scale: 0.7, y: 50 },
			{
				scale: 1,
				y: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: el,
					start: 'top 100%',
					end: 'bottom 75%',
					scrub: true,
				},
			},
		);
	}, []);
};

export default useGreetingScroll;
