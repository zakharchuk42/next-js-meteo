import { ReactNode } from 'react';

export interface CardProps {
	children: NonNullable<ReactNode>;
	flexDirection?: 'row' | 'column';
}
