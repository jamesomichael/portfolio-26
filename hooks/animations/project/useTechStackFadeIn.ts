import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useTechStackFadeIn = (
	refs: RefObject<(HTMLDivElement | null)[]>,
	triggerRef: RefObject<HTMLDivElement | null>,
	{ start = 'top 80%', end = 'top 50%' } = {},
	scrub = false,
) => {
	useEffect(() => {
		gsap.fromTo(
			refs.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.125,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: triggerRef.current,
					start,
					end,
					scrub,
				},
			},
		);
	}, []);
};

export default useTechStackFadeIn;
