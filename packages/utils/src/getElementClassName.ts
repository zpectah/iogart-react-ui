type getElementClassNameStateProps = {
    active?: boolean,
    hover?: boolean,
    focus?: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

type getElementClassNamePrefixesProps = {
    ui?: boolean,
    base?: boolean,
}

const getElementClassName = (
    className: string = '',
    classes: string[] = [],
    state?: getElementClassNameStateProps,
    prefix?: getElementClassNamePrefixesProps,
) => {
    const baseClasses: string[] = [];
    const prefixClasses: string[] = [];
    const stateClasses: string[] = [];
    if (prefix?.ui) prefixClasses.push('iogart-ui');
    if (prefix?.base) prefixClasses.push('iogart-base');
    if (state?.active) stateClasses.push('iogart--active');
    if (state?.hover) stateClasses.push('iogart--hover');
    if (state?.focus) stateClasses.push('iogart--focus');
    if (state?.disabled) stateClasses.push('iogart--disabled');
    if (state?.hidden) stateClasses.push('iogart--hidden');

    const finalClasses = [
        ...prefixClasses,
        ...baseClasses,
        ...classes,
        ...stateClasses,
    ].join(' ');
    const finalClassName = `${finalClasses} ${className}`;

    return finalClassName
        .replaceAll('  ',' ')
        .replace(/\s+$/g, '');
};

export default getElementClassName;
