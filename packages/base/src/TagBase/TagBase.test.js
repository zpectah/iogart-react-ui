import renderer from 'react-test-renderer';

import TagBase from './TagBase';

it('Tag Base - base properties', () => {

    const component = renderer.create(
        <TagBase label="Tag base" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
        tree.props.label;
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
