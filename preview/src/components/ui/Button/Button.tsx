import React, {
    ReactNode,
    createElement,
    DetailedHTMLProps,
    HTMLAttributes,
    ComponentType,
    Attributes,
    RefAttributes
} from "react";
import {Link, LinkProps} from 'react-router-dom';

import { useButtonStyles } from "./styles";

export interface ButtonProps {
    children?: ReactNode;
    // TODO
    to?: string;
    href?: string;
}

const Button = (props: ButtonProps) => {
    const {
        children,
        to,
        href,
    } = props;

    const classes = useButtonStyles();

    const element = to ? Link : href ? 'a' : 'button';
    const buttonProps = {
        className: classes.root,
    };
    const linkProps = {
        to: to ? to : '/',
        href,
        ...buttonProps,
    };
    const finalProps = (to || href) ? linkProps : buttonProps as (Attributes & LinkProps & RefAttributes<HTMLAnchorElement>) | null | undefined;

    return createElement(
        element,
        finalProps,
        children,
    );
};

export default Button;
