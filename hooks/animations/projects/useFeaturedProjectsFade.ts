import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useFeaturedProjectsFade = (
	refs: RefObject<HTMLAnchorElement[]>,
	parentRef: RefObject<HTMLDivElement | null>,
) => {
	useEffect(() => {
		if (!parentRef.current) return;
		if (!refs.current.length) return;

		const animation = gsap.fromTo(
			refs.current,
			{ opacity: 0, x: 50 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				stagger: 0.5,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: parentRef.current,
					start: 'top 40%',
					end: 'bottom 50%',
					scrub: true,
				},
			},
		);

		return () => {
			animation.kill();
		};
	}, [parentRef, refs]);
};

export default useFeaturedProjectsFade;
