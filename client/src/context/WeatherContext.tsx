/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { forecastWeatherApiDataTypes, weatherApiDataTypes } from '../types/Weather.types';

type WeatherContextDataTypes = {
	city: string;
	setCity: (city: string) => void;
	weather: weatherApiDataTypes | null;
	isLoading: boolean;
	isError: boolean;
	forecastWeather: forecastWeatherApiDataTypes | null;
	forecastIsLoading: boolean;
	forecastIsError: boolean;
};

type WeatherProviderProps = {
	children: ReactNode;
};

const WeatherContext = createContext({} as WeatherContextDataTypes);

export function WeatherProvider({ children }: WeatherProviderProps) {
	const [city, setCity] = useState(localStorage.getItem('city') || 'London');
	const { data: weather, isLoading, isError } = useFetchWeather(city, 'current');
	const { data: forecastWeather, isLoading: forecastIsLoading, isError: forecastIsError } = useFetchWeather(city, 'forecast');

	return <WeatherContext.Provider value={{ city, setCity, weather, isLoading, isError, forecastWeather, forecastIsLoading, forecastIsError }}>{children}</WeatherContext.Provider>;
}

export function useWeather() {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useWeather must be used within an WeatherProvider');
	}

	return context;
}
