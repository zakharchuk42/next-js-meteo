import { getWeekDay } from '@/src/utils';
import { NormalizeCityData } from '@/src/Module/Form/fields/FieldFetch';

export const api = (city: NormalizeCityData['properties']): string => {
	return `https://api.open-meteo.com/v1/gfs?latitude=${city.latitude}&longitude=${
		city.longitude
	}&daily=temperature_2m_max,temperature_2m_min,winddirection_10m_dominant&timezone=auto&start_date=${getWeekDay(
		'start'
	)}&end_date=${getWeekDay('end')}`;
};

export const geoCode = (value: string): string => {
	return `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`;
};
