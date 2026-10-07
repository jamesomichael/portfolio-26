'use client';
import React from 'react';

import Loader from '@/components/shared/Loader';
import Footer from '@/components/shared/Footer';

import useWindowLoaded from '@/hooks/useWindowLoaded';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const isLoading = useWindowLoaded();
	return isLoading ? (
		<div className="h-screen bg-slate-950">
			<Loader />
		</div>
	) : (
		<div>
			<div className="bg-slate-950">{children}</div>
			<Footer />
		</div>
	);
};

export default AppLayout;
