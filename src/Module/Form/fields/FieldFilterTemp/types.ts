export enum TempEnum {
	MIN_TEMP = 'minTemp',
	MAX_TEMP = 'maxTemp',
}

export interface FieldFilterTempProps {
	label: string;
	type: TempEnum;
}
