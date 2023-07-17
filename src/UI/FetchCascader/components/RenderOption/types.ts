import { FetchCascaderProps } from '@/src/UI/FetchCascader';

export interface RenderOptionProps<T>
	extends Pick<FetchCascaderProps<T>, 'onClick' | 'showImage'> {
	option: {
		key: number | string;
		label: string;
		img?: string;
		properties: T;
	};
}
