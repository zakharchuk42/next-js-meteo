import { UiCard } from '@/src/UI/Card';
import React from 'react';
import { WeatherTable, WeatherTableProvider } from '@/src/Widgets/Weather/provider';
import { renderColumns } from '@/src/Widgets/Weather/utils/renderColumns';
import s from './Weather.module.scss';
import { Filters } from '@/src/Widgets/Weather/components/Filters';
import { configFiltersParams } from '@/src/Widgets/Weather/utils/configFiltersParams';
import { Analytics } from '@/src/Widgets/Weather/components/Analytics';

export const Weather = () => {
	const columns = renderColumns();
	const filters = configFiltersParams();

	return (
		<div className={s.mainWrapper}>
			<WeatherTableProvider
				initialState={{
					...filters,
					columns,
				}}
			>
				<div className={s.chartCard}>
					<UiCard>
						<Analytics />
					</UiCard>
				</div>
				<div className={s.tableCard}>
					<UiCard flexDirection={'column'}>
						<Filters />
						<WeatherTable />
					</UiCard>
				</div>
			</WeatherTableProvider>
		</div>
	);
};
