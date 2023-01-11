import { render, screen } from '@testing-library/react';
import EpisodeDetail from '../EpisodeDetail';

it('renders initial loading message', () => {
    render(<EpisodeDetail selectedEpisode={null}/>);
    const element = screen.getByText('No Movie Selected')
    expect(element).toBeInTheDocument();
});


