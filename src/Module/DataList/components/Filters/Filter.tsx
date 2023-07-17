import React from 'react';
import { DataListFilterProps } from '@/src/Module/DataList/components/Filters';
import s from './Filter.module.scss';
import { useWeatherStore } from '@/src/Widgets/Weather';
import { Button } from '@mui/material';

export const DataListFilter: React.FC<DataListFilterProps> = ({ elements }) => {
	const [filterResetValues] = useWeatherStore((store) => store.filterResetValues);
	const [filters, set] = useWeatherStore((store) => store.filters);

	const isDisabledBtn =
		!filters.minTemp.temp.length &&
		!filters.maxTemp.temp.length &&
		!filters.city.length;

	const filterReset = () => {
		set({
			filters: {
				...filters,
				...filterResetValues,
			},
		});
	};

	return (
		<div className={s.filter}>
			<div className={s.filter__inputs}>
				{elements.map(({ key, render }) => {
					return <div key={key}>{render()}</div>;
				})}
			</div>
			<div>
				<Button
					onClick={filterReset}
					variant="text"
					disabled={isDisabledBtn}
					color={'success'}
				>
					Reset filters
				</Button>
			</div>
		</div>
	);
};
