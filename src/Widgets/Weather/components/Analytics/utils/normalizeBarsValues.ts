import { WeatherItemType } from '@/src/Widgets/Weather';

type NormalizeBarsValuesType = (extraData: WeatherItemType['chartData']) => {
	avgTemp: number[];
	values: number[];
	startPoint: number;
};

export const normalizeBarsValues: NormalizeBarsValuesType = (extraData) => {
	if (!extraData.city) {
		let startPoint = 0;

		return {
			avgTemp: [],
			values: [0, ...new Array(7).fill(0).map(() => (startPoint += 2))],
			startPoint: 0,
		};
	}
	const averageTemp = extraData.minTemp.map((min, idx) =>
		Number(((min + extraData.maxTemp[idx]) / 2).toFixed())
	);

	let startPoint = Math.min.apply(null, averageTemp);
	let maxPoint = startPoint;
	let minPoint = startPoint + 1;

	const max = new Array(7).fill(0).map(() => (maxPoint += 1));
	const min = new Array(3)
		.fill(0)
		.map(() => (minPoint -= 1))
		.reverse();

	const values = [...min, ...max];

	return {
		avgTemp: averageTemp,
		values,
		startPoint,
	};
};
