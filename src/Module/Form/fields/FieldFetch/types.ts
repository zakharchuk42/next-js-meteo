export interface DataCity {
	admin1: string;
	admin1_id: number;
	admin2: string;
	admin2_id: number;
	country: string;
	country_code: string;
	country_id: number;
	elevation: number;
	feature_code: string;
	id: number;
	latitude: number;
	longitude: number;
	name: string;
	timezone: string;
}

export interface NormalizeCityDataProperties {
	name: string;
	latitude: number;
	longitude: number;
	country_code: string;
	id: number;
}

export interface NormalizeCityData {
	key: number;
	label: string;
	img?: string;
	properties: NormalizeCityDataProperties;
}

export interface DataWeather {
	daily: {
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		time: string[];
		winddirection_10m_dominant: number[];
	};
	daily_units: {
		temperature_2m_max: string;
		temperature_2m_min: string;
		winddirection_10m_dominant: string;
		time: string;
	};
	elevation: number;
	generationtime_ms: number;
	latitude: number;
	longitude: number;
	timezone: string;
	timezone_abbreviation: string;
	utc_offset_seconds: number;
}
