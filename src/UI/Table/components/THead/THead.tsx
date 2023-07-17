import s from '@/src/UI/Table/Table.module.scss';
import React from 'react';
import { useWeatherStore } from '@/src/Widgets/Weather';

export const THead = () => {
	const [columns] = useWeatherStore((store) => store.columns);

	return (
		<thead>
			<tr>
				{columns.map((column) => {
					return (
						<th key={column.key} className={s.table__header}>
							{column.title}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};
