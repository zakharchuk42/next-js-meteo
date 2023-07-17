import React from 'react';
import s from './Table.module.scss';
import { TBody } from '@/src/UI/Table/components/TBody/TBody';
import { THead } from '@/src/UI/Table/components/THead/THead';

export const UiTable: React.FC = () => {
	return (
		<div className={s.table}>
			<table>
				<THead />
				<TBody />
			</table>
		</div>
	);
};
