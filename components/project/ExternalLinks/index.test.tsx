import { render, screen } from '@testing-library/react';

import ExternalLinks from '.';

import type { ProjectExternalLink } from '@/types/projects';

jest.mock('@/hooks/animations/project/useLinksFadeIn');

describe('ExternalLinks', () => {
	it('renders all links provided', () => {
		const links = [
			{ url: 'https://example.com', type: 'website' },
			{ url: 'https://test-storybook.com', type: 'storybook' },
		] as ProjectExternalLink[];
		render(<ExternalLinks links={links} />);
		expect(screen.getAllByRole('link')).toHaveLength(2);
		expect(screen.getByText('Visit')).toBeInTheDocument();
		expect(screen.getByText('View Storybook')).toBeInTheDocument();
	});

	it('renders fallback message if no links are provided', () => {
		render(<ExternalLinks links={[]} />);
		expect(
			screen.getByText('Source code is currently unavailable.'),
		).toBeInTheDocument();
	});
});
