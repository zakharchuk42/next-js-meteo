import { DataListFilter } from '@/src/Module/DataList/components/Filters';
import { renderFilters } from '@/src/Widgets/Weather/components/Filters/utils/renderFilters';

export const Filters = () => {
	const elements = renderFilters();

	return <DataListFilter elements={elements} />;
};
