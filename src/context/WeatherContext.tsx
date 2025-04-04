/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { weatherApiDataTypes } from '../types/Weather.types';

type WeatherContextDataTypes = {
	city: string;
	setCity: (city: string) => void;
	weather: weatherApiDataTypes | null;
	isLoading: boolean;
	isError: boolean;
};

type WeatherProviderProps = {
	children: ReactNode;
};

const WeatherContext = createContext({} as WeatherContextDataTypes);

export function WeatherProvider({ children }: WeatherProviderProps) {
	const [city, setCity] = useState('lisbon');
	const { data: weather, isLoading, isError } = useFetchWeather(city, 'current');

	return <WeatherContext.Provider value={{ city, setCity, weather, isLoading, isError }}>{children}</WeatherContext.Provider>;
}

export function useWeather() {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}
