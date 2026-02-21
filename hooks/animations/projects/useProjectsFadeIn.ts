import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useProjectsFadeIn = (
	refs: RefObject<HTMLAnchorElement[]>,
	parentRef: RefObject<HTMLDivElement | null>,
) => {
	useEffect(() => {
		if (!parentRef.current) return;
		if (!refs.current.length) return;

		const animation = gsap.fromTo(
			refs.current,
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				duration: 0.575,
				stagger: 0.1,
				ease: 'sine.out',
				scrollTrigger: {
					trigger: parentRef.current,
					start: 'top 55%',
					// end: 'bottom 40%',
					// scrub: true,
					// markers: false,
				},
			},
		);

		return () => {
			animation.kill();
		};
	}, [parentRef, refs]);
};

export default useProjectsFadeIn;
