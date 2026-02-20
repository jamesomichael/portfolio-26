import { render, screen } from '@testing-library/react';

import techMap from '@/constants/tech';

import TechStack from '.';

jest.mock('@/hooks/animations/project/useTechStackFadeIn');

describe('TechStack', () => {
	const technologies = Object.keys(techMap);

	it('renders a TechTile for each item', () => {
		render(<TechStack technologies={technologies} />);
		expect(screen.getAllByTestId('tech-tile')).toHaveLength(
			technologies.length,
		);
		for (const tech of technologies) {
			expect(screen.getByText(tech)).toBeInTheDocument();
		}
	});

	it('renders no tiles when an empty technologies array is provided', () => {
		render(<TechStack technologies={[]} />);
		expect(screen.queryByTestId('tech-tile')).toBeNull();
	});
});
