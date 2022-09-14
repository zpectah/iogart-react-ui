import {
    DetailedHTMLProps,
    HTMLAttributes,
    CSSProperties,
    Ref,
} from 'react';


// TODO


export type iogartDivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type iogartLinkElement = DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
export type iogartAnchorElement = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type iogartButtonElement = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type iogartSpanElement = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;


export interface IogartElementBase {
    tabIndex?: number | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    sx?: any; // TODO
}


// export interface IogartDomElement<T> extends DOMAttributes<T> {}
