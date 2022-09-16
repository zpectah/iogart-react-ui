import {
    ReactNode,
    LegacyRef,
    CSSProperties,
} from 'react';
import { WithAnimated } from 'react-spring';

import {
    CollapsibleElementKeys,
    CollapsibleContentElementKeys,
} from './enums';

export type CollapsibleRenderToggleType = {
    collapsed: boolean,
    toggle: () => void,
};

export interface CollapsibleProps {
    children?: ReactNode;
    renderToggle?: (render: CollapsibleRenderToggleType) => ReactNode;
    collapsed?: boolean;
    duration?: number;
    element?: keyof typeof CollapsibleElementKeys;
    styles?: CSSProperties;
    contentElement?: keyof typeof CollapsibleContentElementKeys;
    contentStyles?: CSSProperties;
}

export interface useCollapsibleParameters extends CollapsibleProps {}
export interface useCollapsibleReturn<T = CollapsibleProps> extends useCollapsibleParameters {
    contentRef: LegacyRef<HTMLDivElement> | undefined;
    className: string;
    springProps: CSSProperties;
    animated: WithAnimated;
    renderProps: CollapsibleRenderToggleType;
}
