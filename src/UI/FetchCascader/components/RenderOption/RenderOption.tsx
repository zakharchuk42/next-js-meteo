import s from '@/src/UI/FetchCascader/FetchCascader.module.scss';
import * as React from 'react';
import { RenderOptionProps } from '@/src/UI/FetchCascader/components/RenderOption/types';

export const RenderOption = <T,>(
	props: React.PropsWithChildren<RenderOptionProps<T>>
): React.ReactNode => {
	const { option, onClick, showImage } = props;

	return (
		<div className={s.customInput} onClick={() => onClick(option.properties)}>
			{showImage && <img loading="lazy" width="15" src={option.img} alt="" />}
			{option.label}
		</div>
	);
};
