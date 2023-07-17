const toISOStringDate = (day: Date) => day.toISOString().split('T')[0];

export const currentDay = (): string => toISOStringDate(new Date());

export const getWeekDay = (day: 'end' | 'start'): string | void => {
	const D = new Date();

	if (day === 'start') {
		D.setDate(D.getDate() - D.getDay() + 1);
		return toISOStringDate(D);
	}

	if (day === 'end') {
		D.setDate(D.getDate() - D.getDay() + 7);
		return toISOStringDate(D);
	}
};
