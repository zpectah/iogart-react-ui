import { Attributes, ComponentClass, FunctionComponent } from 'react';

export interface PreviewItem {
  name: string;
  node: FunctionComponent<Attributes> | ComponentClass<Attributes, PreviewItem>;
  path: string;
  category: string;
  tags: string[];
  meta: {
    title: string;
    description: string;
    author: string;
    version: string;
  };
  props: Attributes | null | undefined;
  layout?: 'container';
}
