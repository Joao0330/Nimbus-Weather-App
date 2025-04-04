import { useWeather } from '../context/WeatherContext';
import { WindVariationReturnType, windVariationTypes } from '../types/Weather.types';
/* import { useFetchWeather } from './useFetchWeather'; */

export const useWindSpeed = (): WindVariationReturnType => {
	const { /* city, */ weather } = useWeather();
	/* const { weather } = useFetchWeather(city, 'current'); */

	const windDirection = weather?.wind.deg ?? 0;

	const windValues: windVariationTypes[] = [
		{
			type: 'Wind',
			value: Math.round(weather?.wind.speed ?? 0),
		},
		{
			type: 'Gusts',
			value: Math.round(weather?.wind.gust ?? 0),
		},
	];

	return { windValues, windDirection };
};
