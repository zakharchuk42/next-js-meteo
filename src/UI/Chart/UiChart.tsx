import React, { createRef, useEffect, useState } from 'react';
import s from './Chart.module.scss';
import { UiTypography } from '@/src/UI/Typography';
import { UiChartProps } from '@/src/UI/Chart/types';

export const UiChart: React.FC<UiChartProps> = ({ bars, labels, values, startPoint }) => {
	const refComponent = createRef<HTMLDivElement>();
	const [chartHeight, setChartHeight] = useState<number>();

	useEffect(() => {
		if (refComponent) {
			setChartHeight(refComponent.current?.getBoundingClientRect().height);
		}
	}, [refComponent]);

	const rowHeight = chartHeight ? chartHeight / values.length + 4 : 45;

	return (
		<div className={s.chart}>
			<div className={s.chart__body} ref={refComponent}>
				{values.map((value, idx) => {
					return (
						<div className={s.chart__value} key={idx}>
							<UiTypography className={s.chart__value_number}>
								{value}
							</UiTypography>
						</div>
					);
				})}
			</div>
			<div className={s.chart__footer}>
				{labels.map((label, idx) => {
					const diff = startPoint - bars[idx] + 1;

					return (
						<div key={idx}>
							<div
								style={{
									position: 'absolute',
									width: '30px',
									background: 'linear-gradient(0deg, #173102, #B3FC4F)',
									height: `${rowHeight * 3 - rowHeight * diff}px`,
									bottom: 26,
									borderRadius: '8px 8px 0 0',
									transition: 'all .3s ease',
								}}
							></div>
							<UiTypography>{label}</UiTypography>
						</div>
					);
				})}
			</div>
		</div>
	);
};
