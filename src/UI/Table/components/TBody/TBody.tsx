import React from 'react';
import clsx from 'clsx';
import s from '@/src/UI/Table/Table.module.scss';
import { isEvenRow } from '@/src/utils';
import { useWeatherStore } from '@/src/Widgets/Weather';
import { trimTemp } from '@/src/UI/Table/components/TBody/utils/trimTemp';

export const TBody: React.FC = () => {
	const [dataSource] = useWeatherStore((store) => store.dataSource);
	const [extraData, setExtraData] = useWeatherStore((store) => store.extraData);
	const [filters] = useWeatherStore((store) => store.filters);

	return (
		<tbody>
			{dataSource && dataSource.length ? (
				dataSource
					.filter((item) => {
						if (filters.error) return;

						if (
							filters.minTemp.temp.length &&
							+filters.minTemp.temp > trimTemp(item.tableData.minTemp)
						) {
							return;
						}

						if (
							filters.maxTemp.temp.length &&
							+filters.maxTemp.temp < trimTemp(item.tableData.maxTemp)
						) {
							return;
						}

						return item;
					})
					.map((item, idx) => {
						const {
							tableData: { city, maxTemp, minTemp, windDirection },
						} = item;
						const trClass = clsx(
							s.table__row,
							isEvenRow(idx) && s.table__row_even
						);

						const addToChartTable = () => {
							setExtraData({
								extraData: {
									...extraData,
									...item.chartData,
								},
							});
						};

						return (
							<tr className={trClass} key={city} onClick={addToChartTable}>
								<td>{city}</td>
								<td>{minTemp}</td>
								<td>{maxTemp}</td>
								<td>{windDirection}</td>
							</tr>
						);
					})
			) : (
				<tr className={s.table__row_empty}>
					<td colSpan={4}>Empty data. Please, type city...</td>
				</tr>
			)}
		</tbody>
	);
};
