import { render, screen } from '@testing-library/react';
import App from './App';

it('renders initial loading message', () => {
    render(<App/>);
    const element = screen.getByText('Loading Episodes...')
    expect(element).toBeInTheDocument();
});

