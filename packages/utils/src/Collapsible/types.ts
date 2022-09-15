import { ReactNode, LegacyRef, CSSProperties } from 'react';
import { WithAnimated } from 'react-spring';

export type CollapsibleRenderToggleType = {
    collapsed: boolean,
    toggle: () => void,
};

export interface CollapsibleProps {
    children?: ReactNode;
    renderToggle?: (render: CollapsibleRenderToggleType) => ReactNode;
    collapsed?: boolean;
    duration?: number;
}

export interface useCollapsibleParameters extends CollapsibleProps {}
export interface useCollapsibleReturn<T = CollapsibleProps> extends useCollapsibleParameters {
    contentRef: LegacyRef<HTMLDivElement> | undefined;
    className: string;
    springProps: CSSProperties;
    animated: WithAnimated;
    renderProps: CollapsibleRenderToggleType;
}
