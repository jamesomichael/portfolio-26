import { useState, useEffect } from 'react';

const useWindowLoaded = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoad = () => setIsLoading(false);

	useEffect(() => {
		if (document.readyState === 'complete') {
			handleLoad();
		} else {
			window.addEventListener('load', handleLoad);
		}

		return () => window.removeEventListener('load', handleLoad);
	}, []);

	return isLoading;
};

export default useWindowLoaded;
