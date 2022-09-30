import { useState } from 'react';

import { useCollapsibleProps, useCollapsibleReturn } from './types';
import getElementClassName from '../getElementClassName';

const useCollapsible = (props: useCollapsibleProps) => {
  const { collapsed, triggerProps, contentProps, ...rest } = props;

  const [isCollapsed, setCollapsed] = useState(collapsed);

  const clickHandler = (e: Event) => {
    e.preventDefault();
    setCollapsed(!isCollapsed);
  };

  const triggerClassName = getElementClassName(triggerProps?.className, ['iogart-collapsible-trigger'], {
    isExpanded: isCollapsed,
  });

  const contentClassName = getElementClassName(contentProps?.className, ['iogart-collapsible-content'], {
    isCollapsed,
  });

  const outputTriggerProps: useCollapsibleReturn['trigger'] = {
    onClick: clickHandler,
    className: triggerClassName,
    ['aria-expanded']: isCollapsed ? 'true' : 'false',
  };

  const outputContentProps: useCollapsibleReturn['content'] = {
    className: contentClassName,
  };

  const returnProps: useCollapsibleReturn = {
    collapsed: isCollapsed,
    trigger: outputTriggerProps,
    content: outputContentProps,
    ...rest,
  };

  return returnProps;
};

export default useCollapsible;
