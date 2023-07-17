import {
	DataList,
	DataListTable,
	DataListType,
	useDataList,
	UseDataListType,
} from '@/src/Module/DataList';
import React from 'react';
import { WeatherFilterType, WeatherItemType } from '@/src/Widgets/Weather/types';

export const WeatherTableProvider: DataListType<
	WeatherItemType,
	WeatherFilterType,
	WeatherItemType['chartData']
> = DataList;

export const useWeatherStore: UseDataListType<
	WeatherItemType,
	WeatherFilterType,
	WeatherItemType['chartData']
> = useDataList;

export const WeatherTable: React.FC = DataListTable;
