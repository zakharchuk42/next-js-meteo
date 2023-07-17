import { WeatherFilterType } from '@/src/Widgets/Weather';

export const configFiltersParams = () => {
	const filterResetValues: WeatherFilterType = {
		minTemp: {
			temp: '',
			error: false,
		},
		maxTemp: {
			temp: '',
			error: false,
		},
		error: false,
		city: '',
	};

	const filters: WeatherFilterType = {
		minTemp: {
			temp: '',
			error: false,
		},
		maxTemp: {
			temp: '',
			error: false,
		},
		error: false,
		city: '',
	};

	return {
		filters,
		filterResetValues,
	};
};
