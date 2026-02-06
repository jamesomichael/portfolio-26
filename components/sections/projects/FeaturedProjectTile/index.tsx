import { forwardRef } from 'react';
import Link from 'next/link';

interface PropTypes {
	projectKey: string;
	logo: React.ReactNode;
	backgroundGradient?: string;
}

const FeaturedProjectTile = forwardRef<HTMLAnchorElement, PropTypes>(
	(
		{
			projectKey,
			logo,
			backgroundGradient = 'from-slate-500 to-slate-700',
		}: PropTypes,
		ref,
	) => {
		return (
			<Link
				href={`/projects/${projectKey}`}
				ref={ref}
				className="relative overflow-hidden group h-24 sm:h-32 md:h-36 lg:h-40 bg-slate-800 flex justify-center items-center rounded-xl"
			>
				<div
					className={`rounded-xl absolute inset-0 w-0 bg-linear-to-br ${backgroundGradient} transition-all duration-300 ease-in-out group-hover:w-full`}
				></div>
				<div className="relative group-hover:scale-110 transition-transform duration-700">
					{logo}
				</div>
			</Link>
		);
	},
);

export default FeaturedProjectTile;
