import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const useLoader = () => {
	const [fontsReady, setFontsReady] = useState(false);

	const logoWrapperRef = useRef(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);

	useEffect(() => {
		document.fonts.ready.then(() => {
			setFontsReady(true);
		});
	}, []);

	useEffect(() => {
		if (!ref1.current || !ref2.current || !fontsReady) {
			return;
		}

		const wrapper = logoWrapperRef.current;

		if (!wrapper) {
			return;
		}

		gsap.set(wrapper, { opacity: 0 });

		const tl = gsap.timeline({
			repeat: -1,
			yoyo: true,
			defaults: { ease: 'power1.inOut' },
		});

		const tl2 = gsap.timeline({
			repeat: -1,
			yoyo: true,
			defaults: { ease: 'power1.inOut' },
		});

		tl.to(ref1.current, {
			fontStretch: '110%',
			duration: 0.1,
		})
			.to(ref1.current, {
				fontStretch: '125%',
				duration: 0.5,
			})
			.to(ref1.current, {
				fontStretch: '150%',
				duration: 0.5,
			})
			.to(ref1.current, {
				fontStretch: '70%',
				duration: 0.5,
			})
			.to(ref1.current, {
				fontStretch: '110%',
				duration: 0.25,
			});

		tl2.to(ref2.current, {
			fontStretch: '150%',
			duration: 0.1,
		})
			.to(ref2.current, {
				fontStretch: '125%',
				duration: 0.5,
			})
			.to(ref2.current, {
				fontStretch: '70%',
				duration: 0.5,
			})
			.to(ref2.current, {
				fontStretch: '150%',
				duration: 0.5,
			})
			.to(ref2.current, {
				fontStretch: '130%',
				duration: 0.25,
			});

		gsap.set(wrapper, { opacity: 1 });

		return () => {
			tl.kill();
			tl2.kill();
		};
	}, [fontsReady]);

	return {
		fontsReady,
		wrapperRef: logoWrapperRef,
		refs: [ref1, ref2],
	};
};

export default useLoader;
