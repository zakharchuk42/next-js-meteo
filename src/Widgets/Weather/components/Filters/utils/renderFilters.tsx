import { FieldFetch } from '@/src/Module/Form/fields/FieldFetch';
import { FieldFilterTemp, TempEnum } from '@/src/Module/Form/fields/FieldFilterTemp';

export const renderFilters = () => {
	return [
		{
			key: 'city',
			render: () => {
				return <FieldFetch />;
			},
		},
		{
			key: 'temp_min',
			render: () => {
				return <FieldFilterTemp label={'Min'} type={TempEnum.MIN_TEMP} />;
			},
		},
		{
			key: 'temp_max',
			render: () => {
				return <FieldFilterTemp label={'Max'} type={TempEnum.MAX_TEMP} />;
			},
		},
	];
};
