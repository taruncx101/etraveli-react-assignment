import renderer from 'react-test-renderer';
import EpisodeDetail from '../EpisodeDetail';


it('render without crashing', () => {
  const component = renderer.create(
    <EpisodeDetail selectedEpisode={null}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
