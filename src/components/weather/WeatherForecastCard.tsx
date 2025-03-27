import { FaRegClock } from 'react-icons/fa';
import { WeatherForecastDetails } from './WeatherForecastDetails';
import { weatherForecastTypes } from '../../types/Weather.types';
import { weatherForecastData } from '../../data/weather-forecast';
import { weatherIcons } from '../../data/icons';

export const WeatherForecastCard = ({ type }: weatherForecastTypes) => {
	const forecastTitles: Record<'hourly' | 'daily', string> = {
		hourly: '3-hour forecast',
		daily: '5-day forecast',
	};

	return (
		<article className='p-5 text-white bg-darkBlue-transparent rounded-2xl'>
			<div className='flex items-center gap-3 py-2 text-gray-light border-b-2 border-gray mb-8'>
				<FaRegClock className='text-xl' />
				<h2 className='uppercase'>{forecastTitles[type] || null}</h2>
			</div>

			<div className='flex justify-between gap-7 overflow-x-scroll scrollbar'>
				{weatherForecastData.map((item, index) => (
					<WeatherForecastDetails key={index} type={item.type} time={item.time} temperature={item.temperature} icon={weatherIcons[item.icon ?? 'day']} />
				))}
			</div>
		</article>
	);
};
