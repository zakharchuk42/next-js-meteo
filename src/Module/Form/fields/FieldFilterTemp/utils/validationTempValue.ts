import { WeatherFilterType, WeatherItemType } from '@/src/Widgets/Weather';
import { DataListStoreType } from '@/src/Module/DataList';

type ValidationTempType = (
	filters: WeatherFilterType,
	set: (
		e: Partial<
			DataListStoreType<
				WeatherItemType,
				WeatherFilterType,
				WeatherItemType['chartData']
			>
		>
	) => void
) => void;

export const validationTempValue: ValidationTempType = (filters, set) => {
	const { maxTemp, minTemp } = filters;

	if (!!maxTemp.temp.length && !!minTemp.temp.length) {
		if (+maxTemp.temp < +minTemp.temp) {
			set({
				filters: {
					...filters,
					error: true,
				},
			});
		} else {
			set({
				filters: {
					...filters,
					error: false,
				},
			});
		}
	} else {
		set({
			filters: {
				...filters,
				error: false,
			},
		});
	}
};
