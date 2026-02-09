import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

const useTextFadeIn = (
	parentRef: RefObject<HTMLDivElement | null>,
	{
		duration = 1.5,
		stagger = 0.1,
		start = 'top 70%',
		end = 'top 45%',
		ease = 'power4.out',
	} = {},
	scrub = false,
) => {
	useEffect(() => {
		const elements = parentRef?.current?.querySelectorAll(
			'.gsap-animate, h1, li, span:not(.gsap-ignore-text), p:not(.gsap-ignore-text)',
		);
		if (elements && elements.length > 0) {
			gsap.fromTo(
				elements,
				{ opacity: 0, y: 25 },
				{
					opacity: 1,
					y: 0,
					duration,
					stagger,
					ease,
					scrollTrigger: {
						trigger: parentRef.current,
						start,
						end,
						scrub,
					},
				},
			);
		}
	}, []);
};

export default useTextFadeIn;
