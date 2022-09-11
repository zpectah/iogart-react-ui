import {
    DetailedHTMLProps,
    ReactNode,
    ReactHTMLElement,
    ButtonHTMLAttributes,
    Ref,
} from 'react';

export interface buttonBaseElementProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface ButtonBaseProps extends buttonBaseElementProps {
    children?: ReactNode,
    action?: Ref<HTMLButtonElement>,
    // classes: '',
    // className: '',
    component?: 'button' | 'a',
    // disabled: boolean,
    href?: '',
    // onBlur: '',
    // onClick: '',
    // onDblClick: '',
    // onContextMenu: '',
    // onDragLeave: '',
    // onFocus: '',
    // onFocusVisible: '',
    // onKeyDown: '',
    // onKeyUp: '',
    // onMouseDown: '',
    // onMouseLeave: '',
    // onMouseUp: '',
    // onTouchEnd: '',
    // onTouchMove: '',
    // onTouchStart: '',
    sx?: {}, // TODO
    tabIndex?: number,
    type?: 'button' | 'submit' | 'reset' | undefined,
}

declare const ButtonBase: ButtonBaseProps;

export default ButtonBase;
