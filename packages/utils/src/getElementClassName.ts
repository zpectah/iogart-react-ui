export type getElementClassNameAdditionalProps = {
  isActive?: boolean;
  isHover?: boolean;
  isFocus?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  isCollapsed?: boolean;
  isExpanded?: boolean;
  isOpen?: boolean;
  ui?: boolean;
  base?: boolean;
};

const getElementClassName = (
  className: string = '',
  classes: string[] = [],
  additional?: getElementClassNameAdditionalProps
) => {
  const baseClasses: string[] = [];
  const prefixClasses: string[] = [];
  const stateClasses: string[] = [];
  if (additional?.ui) prefixClasses.push('iogart-ui');
  if (additional?.base) prefixClasses.push('iogart-base');
  if (additional?.isActive) stateClasses.push('iogart--active');
  if (additional?.isHover) stateClasses.push('iogart--hover');
  if (additional?.isFocus) stateClasses.push('iogart--focus');
  if (additional?.isDisabled) stateClasses.push('iogart--disabled');
  if (additional?.isHidden) stateClasses.push('iogart--hidden');
  if (additional?.isCollapsed) stateClasses.push('iogart--collapsed');
  if (additional?.isExpanded) stateClasses.push('iogart--expanded');
  if (additional?.isOpen) stateClasses.push('iogart--open');

  const finalClasses = [
    ...prefixClasses,
    ...baseClasses,
    ...classes,
    ...stateClasses,
  ].join(' ');
  const finalClassName = `${finalClasses} ${className}`;

  return finalClassName.replaceAll('  ', ' ').replace(/\s+$/g, '');
};

export default getElementClassName;
