import renderer from 'react-test-renderer';

import TagBase from './TagBase';

it('Tag Base - onMouseEnter & onMouseLeave', () => {

    const component = renderer.create(
        <TagBase label="TagBase" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
        tree.props?.onMouseEnter();
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
       tree.props?.onMouseLeave();
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
