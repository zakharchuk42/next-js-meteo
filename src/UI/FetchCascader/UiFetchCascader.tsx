import * as React from 'react';
import { Autocomplete } from '@mui/material';
import { inputCustomStyles } from '@/src/UI/FetchCascader/const';
import { FetchCascaderProps } from '@/src/UI/FetchCascader/types';
import { RenderOption } from '@/src/UI/FetchCascader/components/RenderOption';
import { RenderInput } from '@/src/UI/FetchCascader/components/RenderInput';

export const UiFetchCascader = <T,>(
	props: React.PropsWithChildren<FetchCascaderProps<T>>
): React.ReactNode => {
	const {
		loading,
		onOpen,
		onClose,
		open = false,
		options = [],
		noOptionsText = 'Type some text...',
		onClick,
		value,
		onChange,
		showImage = false,
		label,
	} = props;

	return (
		<Autocomplete
			loading={loading}
			sx={inputCustomStyles}
			onOpen={onOpen}
			onClose={onClose}
			open={open}
			options={options}
			noOptionsText={noOptionsText}
			renderOption={(props, option) => {
				return (
					<RenderOption<T>
						key={option.key}
						onClick={onClick}
						showImage={showImage}
						option={option}
					/>
				);
			}}
			renderInput={(params) => {
				return (
					<RenderInput
						label={label}
						params={params}
						value={value}
						onChange={onChange}
						loading={loading}
					/>
				);
			}}
		/>
	);
};
