import { UiTextField } from '@/src/UI/TextField';
import React, { useEffect, useState } from 'react';
import { useWeatherStore } from '@/src/Widgets/Weather';
import { FieldFilterTempProps } from '@/src/Module/Form/fields/FieldFilterTemp/types';
import { validationTempInput } from '@/src/Module/Form/fields/FieldFilterTemp/utils/validationTempInput';
import { validationTempValue } from '@/src/Module/Form/fields/FieldFilterTemp/utils/validationTempValue';

export const FieldFilterTemp: React.FC<FieldFilterTempProps> = ({ label, type }) => {
	const [textError, setTextError] = useState<string | null>(null);
	const [filters, set] = useWeatherStore((store) => store.filters);

	useEffect(() => {
		const textError = validationTempInput(filters[type].temp, filters, set, type);
		setTextError(textError);
		validationTempValue(filters, set);
	}, [filters[type].temp]);

	const onChange = (e: string) => {
		const inputLength: number = e[0] === '-' ? 3 : 2;

		if (e.length > inputLength) return;

		set({
			filters: {
				...filters,
				[type]: {
					...filters.minTemp,
					temp: e,
				},
			},
		});
	};

	return (
		<>
			<UiTextField
				label={label}
				type={'number'}
				value={filters[type].temp}
				onChange={(e) => onChange(e.target.value)}
				helperText={filters.error ? 'Min t° higher Min t°' : textError}
				error={filters.error ? filters.error : filters[type].error}
			/>
		</>
	);
};
