type getElementClassNameStateProps = {
    active?: boolean,
    hover?: boolean,
    focus?: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

const getElementClassName = (
    className: string = '',
    classes: string[] = [],
    state?: getElementClassNameStateProps,
) => {
    const baseClasses: string[] = [];
    const stateClasses: string[] = [];
    if (state?.active) stateClasses.push('iogart--active');
    if (state?.hover) stateClasses.push('iogart--hover');
    if (state?.focus) stateClasses.push('iogart--focus');
    if (state?.disabled) stateClasses.push('iogart--disabled');
    if (state?.hidden) stateClasses.push('iogart--hidden');

    const finalClasses = [
        ...baseClasses,
        ...classes,
        ...stateClasses,
    ].join(' ');
    const finalClassName = `${finalClasses} ${className}`;

    return finalClassName.replaceAll('  ',' ');
};

export default getElementClassName;
