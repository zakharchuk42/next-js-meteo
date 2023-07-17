import { TextField } from '@mui/material';
import { inputCustomStyles } from '@/src/UI/TextField/const';
import React from 'react';
import { UiTextFieldProps } from '@/src/UI/TextField/types';

export const UiTextField: React.FC<UiTextFieldProps> = ({
	label,
	type,
	value,
	onChange,
	helperText,
	error,
}) => {
	return (
		<TextField
			sx={inputCustomStyles}
			label={label}
			type={type}
			value={value}
			onChange={onChange}
			error={error}
			helperText={helperText}
		/>
	);
};
