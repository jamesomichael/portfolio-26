import './globals.css';
import 'react-vertical-timeline-component/style.min.css';

import LenisProvider from '@/components/shared/LenisProvider';
import Footer from '@/components/shared/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Portfolio '26 - James Michael",
	description: 'Software Engineer from Wales, UK.',
	metadataBase: new URL('https://jamesmichael.dev'),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Georama:ital,wdth,wght@0,62.5..150,100..900;1,62.5..150,100..900&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wdth,wght,XOPQ,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,25..151,100..1000,96,468,79,-203,738,514,712&family=Unbounded:wght@200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<LenisProvider>
				<body className="antialiased">
					<div className="bg-slate-950">{children}</div>
					<Footer />
				</body>
			</LenisProvider>
		</html>
	);
}
