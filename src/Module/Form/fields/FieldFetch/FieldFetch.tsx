import { UiFetchCascader } from '@/src/UI/FetchCascader';
import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '@/src/Widgets/Weather';
import { useOpenState } from '@/src/hooks/useOpenState';
import {
	NormalizeCityData,
	NormalizeCityDataProperties,
} from '@/src/Module/Form/fields/FieldFetch';
import { normalizeCitiesData } from '@/src/Module/Form/fields/FieldFetch/utils/normalizeCitiesData';
import { normalizeWeatherData } from '@/src/Module/Form/fields/FieldFetch/utils/normalizeWeatherData';
import { api, geoCode } from '@/src/Module/Form/fields/FieldFetch/api/api';

export const FieldFetch: React.FC = () => {
	const [options, setOptions] = useState<NormalizeCityData[] | []>([]);
	const [dataSource, setDataSource] = useWeatherStore((store) => store.dataSource);
	const [_, setExtraData] = useWeatherStore((store) => store.extraData);
	const [filters, setCity] = useWeatherStore((store) => store.filters);

	const { open, handleOpen, handleClose } = useOpenState();
	const {
		open: loading,
		handleOpen: startLoading,
		handleClose: endLoading,
	} = useOpenState();

	useEffect(() => {
		startLoading();
		fetch(geoCode(filters.city))
			.then((resp) => resp.json())
			.then((json) => {
				setOptions(normalizeCitiesData(json.results));
				endLoading();
			})
			.catch((err) => {
				endLoading();
				console.log(err);
			});

		return () => {};
	}, [filters.city]);

	const handleCity = async (city: NormalizeCityData['properties']) => {
		handleClose();
		setOptions([]);
		setCity({
			filters: {
				...filters,
				city: '',
			},
		});

		await fetch(api(city))
			.then((resp) => resp.json())
			.then((json) => {
				const { chartData, tableData } = normalizeWeatherData(json, city.name);
				setDataSource({
					dataSource: [...dataSource, { chartData, tableData }],
				});

				setExtraData({
					extraData: {
						...chartData,
					},
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<UiFetchCascader<NormalizeCityDataProperties>
			loading={loading}
			onOpen={handleOpen}
			onClose={() => {
				handleClose();
				setOptions([]);
			}}
			open={open}
			options={options}
			noOptionsText={'Type city...'}
			onClick={(option) => handleCity(option)}
			value={filters.city}
			onChange={(e) =>
				setCity({
					filters: {
						...filters,
						city: e.target.value,
					},
				})
			}
			showImage={true}
			label={'City'}
		/>
	);
};
