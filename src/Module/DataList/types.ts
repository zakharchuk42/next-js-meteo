import { UiTableColumnType } from '@/src/UI/Table';
import { ProviderType, UseStoreType } from '@/src/Libs/creatFastContext';

export interface DataListStoreType<DataSource, Filter, ExtraData> {
	columns: UiTableColumnType[];
	dataSource: DataSource[];
	extraData: ExtraData;
	filters: Filter;
	filterResetValues: Partial<Filter>;
}

export type UseDataListType<D, F, E> = UseStoreType<DataListStoreType<D, F, E>>;

export type DataListType<D, F, E> = ProviderType<DataListInitialStoreType<D, F, E>>;

export interface DataListInitialStoreType<D, F, E>
	extends Partial<DataListStoreType<D, F, E>> {}
