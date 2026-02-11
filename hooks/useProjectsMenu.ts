import { useState, useEffect, RefObject } from 'react';
import gsap from 'gsap';

const useProjectsMenu = (ref: RefObject<HTMLDivElement | null>) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen || !ref.current) return;
		gsap.fromTo(
			ref.current,
			{ x: '100%' },
			{
				x: '0%',
				duration: 0.4,
				ease: 'power4.out',
			},
		);
	}, [isOpen, ref]);

	const open = () => setIsOpen(true);

	const close = () => {
		if (!ref.current) return;
		gsap.to(ref.current, {
			x: '100%',
			duration: 0.25,
			ease: 'power4.in',
			onComplete: () => setIsOpen(false),
		});
	};

	return { isOpen, open, close };
};

export default useProjectsMenu;
