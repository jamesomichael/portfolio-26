import { render, screen } from '@testing-library/react';

import techMap from '@/constants/tech';

import TechTile from '.';

describe('TechTile', () => {
	it('renders a known technology found in the techMap', () => {
		const [tech, data] = Object.entries(techMap)[0];
		render(
			<TechTile
				name={tech}
				icon={data.icon}
				gradientTo={data.gradientTo}
			/>,
		);
		expect(screen.getByText(tech)).toBeInTheDocument();
	});

	it('renders an unknown technology', () => {
		const tech = 'Unknown Tech';
		render(<TechTile name={tech} />);
		expect(screen.getByText(tech)).toBeInTheDocument();
	});

	it('renders a default icon when one is not provided', () => {
		render(<TechTile name="Unknown Tech" />);
		const tile = screen.getByTestId('tech-tile');
		expect(tile.querySelector('svg')).toBeInTheDocument();
	});
});
