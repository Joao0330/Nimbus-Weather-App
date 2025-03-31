import { FaRegClock, FaRegCalendar } from 'react-icons/fa';
import { WeatherForecastDetails } from './WeatherForecastDetails';
import { weatherForecastTypes } from '../../types/Weather.types';
import { dailyWeatherForecastData, weatherForecastData } from '../../data/weather-forecast';
import { weatherIcons } from '../../data/icons';

export const WeatherForecastCard = ({ type }: weatherForecastTypes) => {
	const forecastTitles: Record<'hourly' | 'daily', string> = {
		hourly: '3-hour forecast',
		daily: '5-day forecast',
	};

	const icon = type === 'hourly' ? <FaRegClock className='text-xl' /> : <FaRegCalendar className='text-xl' />;

	//! Change this to another file and import it here
	const getForecastData = () => {
		const data = type === 'hourly' ? weatherForecastData : dailyWeatherForecastData;
		return data.map((item, index) => (
			<WeatherForecastDetails key={index} type={item.type} time={item.time} temperature={item.temperature} icon={weatherIcons[item.icon ?? 'day']} {...(type === 'daily' && { date: item.date })} />
		));
	};

	return (
		<article className='forecastCard'>
			<div className='flex items-center gap-3 py-2 text-gray-light border-b-2 border-gray mb-8'>
				{icon}
				<h2 className='uppercase'>{forecastTitles[type] || null}</h2>
			</div>

			<div className='flex justify-between gap-7 overflow-x-scroll scrollbar'>{getForecastData()}</div>
		</article>
	);
};
