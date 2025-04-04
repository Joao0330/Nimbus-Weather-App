/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { weatherApiDataTypes } from '../types/Weather.types';

type WeatherContextData = {
	city: string;
	setCity: (city: string) => void;
	weather: weatherApiDataTypes | null;
	loading: boolean;
	error: string | null;
};

type WeatherProviderProps = {
	children: ReactNode;
};

const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children }: WeatherProviderProps) {
	const [city, setCity] = useState('Lisbon');
	const { weather, loading, error } = useFetchWeather(city, 'current');

	return <WeatherContext.Provider value={{ city, setCity, weather, loading, error }}>{children}</WeatherContext.Provider>;
}

export function useWeather() {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}
