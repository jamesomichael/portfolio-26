import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const useStretchText = ({
	delay = 0,
	probability = 0.2,
}: {
	delay?: number;
	probability?: number;
}) => {
	const charRefs = useRef<HTMLSpanElement[]>([]);
	const stretchValues = ['70%', '90%', '110%', '130%', '150%'];

	useEffect(() => {
		const stretchChar = (el: HTMLElement) => {
			if (!el) return;

			if (Math.random() < probability) {
				gsap.to(el, {
					fontStretch: () => gsap.utils.random(stretchValues),
					duration: gsap.utils.random(0.5, 1.2),
					yoyo: true,
					repeat: 1,
					opacity: 1,
					ease: 'power4.inOut',
					onComplete: () => {
						gsap.delayedCall(gsap.utils.random(3, 4), () =>
							stretchChar(el),
						);
					},
				});
			} else {
				gsap.delayedCall(gsap.utils.random(1, 3), () =>
					stretchChar(el),
				);
			}
		};

		const start = () => {
			charRefs.current.forEach((el) => stretchChar(el));
		};

		const timer = gsap.delayedCall(delay, start);

		return () => {
			timer.kill();
			gsap.killTweensOf(charRefs.current);
		};
	}, [delay]);

	return charRefs;
};

export default useStretchText;
