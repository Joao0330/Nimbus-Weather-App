import { api } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const fetchWeather = async (city: string, type: 'current' | 'forecast') => {
	const endpoint = type === 'forecast' ? 'forecast' : 'weather';
	const { data } = await api.get(`/${endpoint}`, {
		params: {
			q: city,
			units: 'metric',
		},
	});
	return data;
};

export const useFetchWeather = (city: string, type: 'current' | 'forecast') => {
	return useQuery({
		queryKey: ['weather', city, type],
		queryFn: () => fetchWeather(city, type),
		staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
		enabled: !!city,
		retry: 1,
	});
};
