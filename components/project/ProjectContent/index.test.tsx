import { render, screen } from '@testing-library/react';

import ProjectContent from '.';

jest.mock('@/hooks/animations/shared/useTextFadeIn');

describe('ProjectContent', () => {
	it('renders the headline if one is provided', () => {
		const headline = 'Test Headline';
		render(<ProjectContent headline={headline} />);
		expect(screen.getByText(headline)).toBeInTheDocument();
	});

	it('renders the description if one is provided', () => {
		const description = 'Test Description';
		render(<ProjectContent description={description} />);
		expect(screen.getByText(description)).toBeInTheDocument();
	});
});
