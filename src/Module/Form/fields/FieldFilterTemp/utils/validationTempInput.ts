import { WeatherFilterType, WeatherItemType } from '@/src/Widgets/Weather';
import { DataListStoreType } from '@/src/Module/DataList';
import { TempEnum } from '@/src/Module/Form/fields/FieldFilterTemp';

type ValidationInputType = (
	temp: string,
	filters: WeatherFilterType,
	set: (
		e: Partial<
			DataListStoreType<
				WeatherItemType,
				WeatherFilterType,
				WeatherItemType['chartData']
			>
		>
	) => void,
	type: TempEnum
) => string | null;

export const validationTempInput: ValidationInputType = (temp, filters, set, type) => {
	if (+temp < -80) {
		set({
			filters: {
				...filters,
				[type]: {
					...filters[type],
					error: true,
				},
			},
		});
		return 'Min temp -80 °C';
	}

	if (+temp > 80) {
		set({
			filters: {
				...filters,
				[type]: {
					...filters[type],
					error: true,
				},
			},
		});
		return 'Max temp 80 °C';
	}

	set({
		filters: {
			...filters,
			[type]: {
				...filters[type],
				error: false,
			},
		},
	});

	return null;
};
