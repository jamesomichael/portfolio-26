'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
	const lenisRef = useRef<Lenis | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		if (lenisRef.current)
			lenisRef.current?.scrollTo(0, { immediate: true });
	}, [pathname]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			lerp: 0.1,
		});

		lenisRef.current = lenis;

		lenis.on('scroll', ScrollTrigger.update);

		const raf = (time: number) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(raf);

		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
};

export default LenisProvider;
