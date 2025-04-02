/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from 'react';

type WeatherContextData = {
	city: string;
	setCity: (city: string) => void;
};

type WeatherProviderProps = {
	children: ReactNode;
};

const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children }: WeatherProviderProps) {
	const [city, setCity] = useState('London');

	return <WeatherContext.Provider value={{ city, setCity }}>{children}</WeatherContext.Provider>;
}

export function useWeather() {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}
