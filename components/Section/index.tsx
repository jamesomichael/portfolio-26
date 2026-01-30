'use client';
import React from 'react';

import colourMap from '@/constants/colours';

import StretchText from '../StretchText';

const Section = ({
	title,
	background = 'dark',
	className = '',
	children,
}: {
	title?: string;
	background?: keyof typeof colourMap;
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<section className={`min-h-fit ${colourMap[background]} ${className}`}>
			<div className="max-w-7xl mx-auto px-6 sm:px-8">
				{title && (
					<div className="h-24 sm:h-32 flex items-center">
						<StretchText
							text={title}
							className="text-blue-400 uppercase font-georama leading-none font-extrabold text-3xl sm:text-5xl font-stretch-115%"
							probability={0.15}
						/>
					</div>
				)}
				<div
					className={`flex flex-col gap-8 ${title ? 'pt-2 pb-20' : ''}`}
				>
					{children}
				</div>
			</div>
		</section>
	);
};

export default Section;
