import renderer from 'react-test-renderer';

import Stack from './Stack';

it('Stack - common', () => {

    const component = renderer.create(
        <Stack> <div>A</div><div>B</div><div>C</div> </Stack>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
