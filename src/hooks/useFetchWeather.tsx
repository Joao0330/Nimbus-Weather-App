import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { weatherApiDataTypes } from '../types/Weather.types';

const forecastType: Record<'current' | 'forecast', string> = {
	current: 'weather',
	forecast: 'forecast',
};

export const useFetchWeather = (city: string, type: 'current' | 'forecast') => {
	const [weather, setWeather] = useState<weatherApiDataTypes | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!city) return;

		const fetchWeather = async () => {
			console.log('Effect triggered due to:', { city, type });
			setLoading(true);
			try {
				const { data } = await api.get(`/${forecastType[type]}?q=${city}`);
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
	}, [city, type]);

	return { weather, loading, error };
};
