import renderer from 'react-test-renderer';

import Button from './Button';

it('Button - onMouseEnter & onMouseLeave', () => {

    const component = renderer.create(
        <Button>Button</Button>
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
