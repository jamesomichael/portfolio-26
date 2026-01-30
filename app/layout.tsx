import './globals.css';

import LenisProvider from '@/components/LenisProvider';

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
					href="https://fonts.googleapis.com/css2?family=Georama:ital,wdth,wght@0,62.5..150,100..900;1,62.5..150,100..900&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Unbounded:wght@200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<LenisProvider>
				<body className="antialiased">{children}</body>
			</LenisProvider>
		</html>
	);
}
