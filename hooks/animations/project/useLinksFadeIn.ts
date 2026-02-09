import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useLinksFadeIn = (
	refs: RefObject<(HTMLAnchorElement | null)[]>,
	parentRef: RefObject<HTMLDivElement | null>,
	{ start = 'top 70%', end = 'top 45%' } = {},
	scrub = false,
) => {
	useEffect(() => {
		gsap.fromTo(
			refs.current,
			{ opacity: 0, x: -30 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				stagger: 0.2,
				ease: 'power4.inOut',
				scrollTrigger: {
					trigger: parentRef.current,
					start,
					end,
					scrub,
				},
			},
		);
	}, []);
};

export default useLinksFadeIn;
