import { useState, useRef, useEffect } from 'react';

const useNavbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);
	const lastScrollYRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (
				currentScrollY < lastScrollYRef.current ||
				currentScrollY <= 0
			) {
				setShowNavbar(true);
			} else {
				setShowNavbar(false);
			}
			lastScrollYRef.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return showNavbar;
};

export default useNavbar;
