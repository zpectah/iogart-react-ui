import { CLASSNAMES } from '@iogart-react-ui/styles';

type getElementClassNameAdditionalProps = {
  isActive?: boolean;
  isHover?: boolean;
  isFocus?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  isCollapsed?: boolean;
  isExpanded?: boolean;
  isOpen?: boolean;
  isLoading?: boolean;
  ui?: boolean;
  base?: boolean;
};

const getElementClassName = (className = '', classes: string[] = [], additional?: getElementClassNameAdditionalProps) => {
  const baseClasses: string[] = [];
  const prefixClasses: string[] = [];
  const stateClasses: string[] = [];
  if (additional?.ui) prefixClasses.push(CLASSNAMES.ui);
  if (additional?.base) prefixClasses.push(CLASSNAMES.base);
  if (additional?.isActive) stateClasses.push(CLASSNAMES.active);
  if (additional?.isHover) stateClasses.push(CLASSNAMES.hover);
  if (additional?.isFocus) stateClasses.push(CLASSNAMES.focus);
  if (additional?.isDisabled) stateClasses.push(CLASSNAMES.disabled);
  if (additional?.isHidden) stateClasses.push(CLASSNAMES.hidden);
  if (additional?.isCollapsed) stateClasses.push(CLASSNAMES.collapsed);
  if (additional?.isExpanded) stateClasses.push(CLASSNAMES.expanded);
  if (additional?.isOpen) stateClasses.push(CLASSNAMES.open);
  if (additional?.isLoading) stateClasses.push(CLASSNAMES.loading);

  const finalClasses = [...prefixClasses, ...baseClasses, ...classes, ...stateClasses].join(' ');
  const finalClassName = `${finalClasses} ${className}`;

  return finalClassName.replaceAll('  ', ' ').replace(/\s+$/g, '');
};

export { getElementClassName };
