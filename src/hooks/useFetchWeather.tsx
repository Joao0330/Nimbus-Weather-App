import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { weatherApiDataTypes } from '../types/Weather.types';

export const useFetchWeather = (city: string) => {
	const [weather, setWeather] = useState<weatherApiDataTypes | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!city) return;

		const fetchWeather = async () => {
			setLoading(true);
			try {
				const { data } = await api.get(`/weather?q=${city}`);
				setWeather(data);
				setError(null);
			} catch (err) {
				setError('Failed to fetch weather data');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, [city]);

	return { weather, loading, error };
};
