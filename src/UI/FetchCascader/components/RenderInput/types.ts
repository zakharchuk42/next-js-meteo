import { FetchCascaderProps } from '@/src/UI/FetchCascader';
import { AutocompleteRenderInputParams } from '@mui/material';

export interface RenderInputProps
	extends Pick<FetchCascaderProps<any>, 'value' | 'onChange' | 'loading' | 'label'> {
	params: AutocompleteRenderInputParams;
}
