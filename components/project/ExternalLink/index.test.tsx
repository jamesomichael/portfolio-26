import { render, screen } from '@testing-library/react';

import ExternalLink from '.';

describe('ExternalLink', () => {
	it('renders a link with the correct href', () => {
		const url = 'https://example.com';
		render(<ExternalLink url={url} />);
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', url);
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');
	});

	it('uses a custom label if provided', () => {
		const url = 'https://test-project.com';
		const label = 'View documentation';
		render(<ExternalLink url={url} label={label} />);
		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('renders a default link', () => {
		const url = 'https://test-project.com';
		render(<ExternalLink url={url} />);
		expect(screen.getByText('Visit')).toBeInTheDocument();
	});

	it('renders a default Storybook link', () => {
		const url = 'https://test-storybook.com';
		render(<ExternalLink url={url} type="storybook" />);
		expect(screen.getByText('View Storybook')).toBeInTheDocument();
	});

	it('renders a default GitHub link', () => {
		const url = 'https://github.com/test-user/test-repository';
		render(<ExternalLink url={url} type="github" />);
		expect(screen.getByText('View source code')).toBeInTheDocument();
	});
});
