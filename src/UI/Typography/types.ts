import React from 'react';

export interface UiTypographyProps {
	children: NonNullable<React.ReactNode>;
	variant?: 'h1' | 'h2' | 'h3' | 'p' | 'b';
	color?: 'white' | 'black' | 'green' | 'grey';
	className?: string;
}
