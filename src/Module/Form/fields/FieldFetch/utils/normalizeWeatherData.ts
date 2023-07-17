import { currentDay } from '@/src/utils/date';
import { WeatherItemType } from '@/src/Widgets/Weather';
import { DataWeather } from '@/src/Module/Form/fields/FieldFetch';

type NormalizeWeatherData = (data: DataWeather, value: string) => WeatherItemType;

export const normalizeWeatherData: NormalizeWeatherData = (data, value) => {
	const {
		daily: {
			temperature_2m_max,
			temperature_2m_min,
			time,
			winddirection_10m_dominant,
		},
		daily_units,
	} = data;

	const day = time.indexOf(currentDay());

	return {
		tableData: {
			city: value,
			maxTemp: `${temperature_2m_max[day].toFixed()} ${
				daily_units.temperature_2m_max
			}`,
			minTemp: `${temperature_2m_min[day].toFixed()} ${
				daily_units.temperature_2m_min
			}`,
			windDirection: `${winddirection_10m_dominant[day]} ${daily_units.winddirection_10m_dominant}`,
		},
		chartData: {
			city: value,
			maxTemp: temperature_2m_max,
			minTemp: temperature_2m_min,
		},
	};
};
