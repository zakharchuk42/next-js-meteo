import React from 'react';
import { CardProps } from '@/src/UI/Card';
import s from './Card.module.scss';
import clsx from 'clsx';

const flexMapper = {
	row: s.cardWrapper__flex_row,
	column: s.cardWrapper__flex_column,
};

export const UiCard: React.FC<CardProps> = ({ children, flexDirection = 'row' }) => {
	const className = clsx(s.cardWrapper, flexMapper[flexDirection]);

	return <div className={className}>{children}</div>;
};
