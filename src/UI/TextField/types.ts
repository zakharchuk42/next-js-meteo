export interface UiTextFieldProps {
	label: string;
	type: 'text' | 'number';
	value: string;
	onChange: (e: any) => void;
	helperText?: string | null;
	error?: boolean;
}
