import s from './page.module.css';
import React from 'react';
import { NextPage } from 'next';
import { Weather } from '@/src/Widgets/Weather';

export const metadata = {
	title: 'Meteo',
	description: 'weather by meteo',
};

const Home: NextPage = () => {
	return (
		<main className={s.main}>
			<Weather />
		</main>
	);
};

export { Home as default };
