import { useRef, useEffect, RefObject } from 'react';
import gsap from 'gsap';

const useScrollIconFade = (parentRef: RefObject<HTMLDivElement | null>) => {
	const ref = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			ref.current,
			{ opacity: 1, y: 0 },
			{
				opacity: 0,
				y: 50,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: parentRef.current,
					start: 'bottom 90%',
					end: 'bottom 60%',
					scrub: true,
				},
			},
		);
	}, []);
	return ref;
};

export default useScrollIconFade;
