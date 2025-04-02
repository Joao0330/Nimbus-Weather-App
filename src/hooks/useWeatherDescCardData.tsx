import { FaTemperatureLow } from 'react-icons/fa';
import { useWeather } from '../context/WeatherContext';
import { weatherDescCardTypes } from '../types/Weather.types';
import { useFetchWeather } from './useFetchWeather';
import { IoEyeOutline, IoRainyOutline, IoWaterOutline } from 'react-icons/io5';

export const useWeatherDescCardData = (): weatherDescCardTypes[] => {
	const { city } = useWeather();
	const { weather } = useFetchWeather(city);

	return [
		{
			type: 'temperature',
			title: 'Feels like',
			value: Math.round(weather?.main.feels_like ?? 0),
			icon: <FaTemperatureLow className='text-xl' />,
		},
		{
			type: 'percipitation',
			title: 'Percipitation',
			value: weather?.rain?.['1h'] ?? 0,
			icon: <IoRainyOutline className='text-xl' />,
		},
		{
			type: 'visibility',
			title: 'Visibility',
			value: weather?.visibility ?? 0,
			icon: <IoEyeOutline className='text-xl' />,
		},
		{
			type: 'humidity',
			title: 'Humidity',
			value: weather?.main.humidity ?? 0,
			icon: <IoWaterOutline className='text-xl' />,
		},
	];
};
