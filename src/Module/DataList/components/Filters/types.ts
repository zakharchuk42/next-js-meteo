import React from 'react';

export interface DataListFilterProps {
	elements: {
		key: string;
		render: () => React.ReactNode;
	}[];
}
