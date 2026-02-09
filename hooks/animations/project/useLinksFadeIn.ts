import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useLinksFadeIn = (
	refs: RefObject<(HTMLAnchorElement | null)[]>,
	parentRef: RefObject<HTMLDivElement | null>,
	scrub = false,
) => {
	useEffect(() => {
		gsap.fromTo(
			refs.current,
			{ opacity: 0, x: -30 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: parentRef.current,
					start: 'top 80%',
					end: 'top 50%',
					scrub,
				},
			},
		);
	}, []);
};

export default useLinksFadeIn;
