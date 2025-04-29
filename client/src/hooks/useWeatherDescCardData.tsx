import { FaTemperatureLow } from 'react-icons/fa';
import { useWeather } from '../context/WeatherContext';
import { weatherDescCardTypes } from '../types/Weather.types';
import { IoEyeOutline, IoRainyOutline, IoWaterOutline } from 'react-icons/io5';
import { BsCloudSnow } from 'react-icons/bs';

export const useWeatherDescCardData = (): weatherDescCardTypes[] => {
	const { weather } = useWeather();

	return [
		{
			type: 'temperature',
			title: 'Feels like',
			value: Math.round(weather?.main.feels_like ?? 0),
			icon: <FaTemperatureLow className='text-xl' />,
		},
		{
			type: 'precipitation',
			title: weather?.snow ? 'Snow' : 'Rain',
			value: weather?.rain?.['1h'] ?? weather?.snow?.['1h'] ?? 0,
			icon: weather?.snow ? <BsCloudSnow className='text-xl' /> : <IoRainyOutline className='text-xl' />,
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
