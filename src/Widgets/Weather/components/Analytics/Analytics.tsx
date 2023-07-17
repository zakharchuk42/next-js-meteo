import React from 'react';
import s from './Analytics.module.scss';
import { UiTypography } from '@/src/UI/Typography/UiTypography';
import { useWeatherStore } from '@/src/Widgets/Weather';
import { normalizeBarsValues } from '@/src/Widgets/Weather/components/Analytics/utils/normalizeBarsValues';
import { UiChart } from '@/src/UI/Chart';

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const Analytics: React.FC = () => {
	const [extraData] = useWeatherStore((store) => store.extraData);
	const cityName = extraData?.city ? extraData.city : 'Choose the city';

	const { avgTemp, values, startPoint } = normalizeBarsValues(extraData);

	return (
		<div className={s.analytics}>
			<div className={s.analytics__header}>
				<UiTypography variant={'h2'}>Analytics</UiTypography>
				<UiTypography variant={'p'} className={s.analytics__valuesName}>
					{cityName}
				</UiTypography>
			</div>
			<UiChart
				bars={avgTemp}
				labels={labels}
				values={values}
				startPoint={startPoint}
			/>
		</div>
	);
};
