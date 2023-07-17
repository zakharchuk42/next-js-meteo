import { DataCity, NormalizeCityData } from '@/src/Module/Form/fields/FieldFetch';

export type NormalizeDataProp = (data: DataCity[]) => NormalizeCityData[];

export const normalizeCitiesData: NormalizeDataProp = (data = []) =>
	data.map((item) => {
		return {
			key: item.id,
			label: item.name,
			img: `https://open-meteo.com/images/country-flags/${item.country_code.toLowerCase()}.svg`,
			properties: {
				name: item.name,
				latitude: +item.latitude.toFixed(2),
				longitude: +item.longitude.toFixed(2),
				country_code: item.country_code,
				id: item.id,
			},
		};
	});
