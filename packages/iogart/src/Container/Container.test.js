import renderer from 'react-test-renderer';

import Container from './Container';

it('Container - common', () => {

    const component = renderer.create(
        <Container> <div>A</div><div>B</div><div>C</div> </Container>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
