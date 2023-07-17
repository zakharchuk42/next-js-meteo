import * as React from 'react';
import { CircularProgress, TextField } from '@mui/material';
import { RenderInputProps } from '@/src/UI/FetchCascader/components/RenderInput/types';

export const RenderInput: React.FC<RenderInputProps> = ({
	params,
	value,
	onChange,
	loading,
	label,
}) => {
	return (
		<TextField
			{...params}
			label={label}
			value={value}
			onChange={onChange}
			InputProps={{
				...params.InputProps,
				endAdornment: (
					<React.Fragment>
						{loading ? <CircularProgress color="inherit" size={20} /> : null}
						{params.InputProps.endAdornment}
					</React.Fragment>
				),
			}}
		/>
	);
};
