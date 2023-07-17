import React from 'react';

export const useOpenState = (
	initialState = false
): {
	open: boolean;
	handleOpen(): void;
	handleClose(): void;
	handleToggle(): void;
} => {
	const [open, setOpen] = React.useState(initialState);
	return {
		open,
		handleOpen: () => setOpen(true),
		handleClose: () => setOpen(false),
		handleToggle: () => setOpen((prevState) => !prevState),
	};
};
