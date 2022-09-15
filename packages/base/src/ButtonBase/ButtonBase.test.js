import renderer from 'react-test-renderer';

import ButtonBase from './ButtonBase';

it('Button Base - onMouseEnter & onMouseLeave', () => {

    const component = renderer.create(
        <ButtonBase>Button base</ButtonBase>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
        tree.props.onMouseEnter();
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
       tree.props.onMouseLeave();
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
