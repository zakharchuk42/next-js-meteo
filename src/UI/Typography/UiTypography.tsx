import React from 'react';
import clsx from 'clsx';
import { UiTypographyProps } from '@/src/UI/Typography/types';
import { colorMapper, variantMapper } from '@/src/UI/Typography/classesMapper';

export const UiTypography: React.FC<UiTypographyProps> = ({
	variant = 'p',
	color = 'white',
	children,
	className: classNameProp,
}) => {
	const className = clsx(classNameProp, colorMapper[color], variantMapper[variant]);

	return <p className={className}>{children}</p>;
};
