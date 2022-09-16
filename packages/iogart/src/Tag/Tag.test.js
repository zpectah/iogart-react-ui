import renderer from 'react-test-renderer';

import Tag from './Tag';

it('Tag - onMouseEnter & onMouseLeave', () => {

    const component = renderer.create(
        <Tag>Tag</Tag>
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
