export interface WeatherItemType {
	chartData: {
		city: string;
		maxTemp: number[];
		minTemp: number[];
	};
	tableData: {
		city: string;
		maxTemp: string;
		minTemp: string;
		windDirection: string;
	};
}

export interface WeatherFilterType {
	minTemp: {
		temp: string;
		error: boolean;
	};
	maxTemp: {
		temp: string;
		error: boolean;
	};
	error: boolean;
	city: string;
}
