export interface FetchCascaderProps<T> {
	loading: boolean;
	onOpen: () => void;
	onClose: () => void;
	open: boolean;
	options: {
		key: number | string;
		label: string;
		img?: string;
		properties: T;
	}[];
	noOptionsText: string;
	onClick: (option: T) => void;
	value: string;
	onChange: (e: any) => void;
	showImage?: boolean;
	label: string;
}
