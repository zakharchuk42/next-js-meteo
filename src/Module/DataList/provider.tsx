import { createFastContext } from '@/src/Libs/creatFastContext/createFastContext';
import React from 'react';
import { DataListStoreType, DataListType } from '@/src/Module/DataList/types';

const { Provider, useStore } = createFastContext<DataListStoreType<any, any, any>>();

const DataList: DataListType<any, any, any> = ({
	children,
	initialState: { columns = [], filters = {}, filterResetValues = {} },
}) => {
	return (
		<Provider
			initialState={{
				columns,
				dataSource: [],
				extraData: {},
				filters,
				filterResetValues,
			}}
		>
			{children}
		</Provider>
	);
};

export { DataList, useStore as useDataList };
