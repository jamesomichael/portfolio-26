import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

const useOtherProjectsFade = (
	refs: RefObject<HTMLAnchorElement[]>,
	parentRef: RefObject<HTMLDivElement | null>,
) => {
	useEffect(() => {
		if (!parentRef.current) return;
		if (!refs.current.length) return;

		const animation = gsap.fromTo(
			refs.current,
			{ opacity: 0, y: 15 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: parentRef.current,
					start: 'top 30%',
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

export default useOtherProjectsFade;
