import { FaRegClock, FaRegCalendar } from 'react-icons/fa';
import { WeatherForecastDetails } from './WeatherForecastDetails';
import { weatherForecastTypes } from '../../types/Weather.types';
import { weatherIcons } from '../../data/icons';
import { useHourlyForecast } from '../../hooks/useHourlyForecast';
import { useDailyForecast } from '../../hooks/useDailyForecast';
import { useWeather } from '../../context/WeatherContext';
import { Loader } from '../Loader';

export const WeatherForecastCard = ({ type }: weatherForecastTypes) => {
	const { forecastWeather, forecastIsLoading, forecastIsError } = useWeather();
	const hourlyForecastData = useHourlyForecast();
	const dailyForecastData = useDailyForecast();

	const forecastTitles: Record<'hourly' | 'daily', string> = {
		hourly: '3-hour forecast',
		daily: '5-day forecast',
	};

	const icon = type === 'hourly' ? <FaRegClock className='text-xl' /> : <FaRegCalendar className='text-xl' />;
	const forecastData = type === 'hourly' ? hourlyForecastData : dailyForecastData;

	return (
		<article className='forecastCard'>
			<div className='flex items-center gap-3 py-2 text-gray-light border-b-2 border-gray mb-8'>
				{icon}
				<h2 className='uppercase'>{forecastTitles[type] || null}</h2>
			</div>

			{forecastIsLoading && <Loader />}
			{forecastIsError && <p>Error fetching weather data</p>}

			{forecastWeather && (
				<>
					<div className='flex justify-between gap-7 overflow-x-scroll scrollbar max-[500px]:gap-1'>
						{forecastData.map((item, index) => (
							<WeatherForecastDetails
								key={index}
								position={index}
								type={item.type}
								time={item.time}
								temperature={item.temperature}
								icon={weatherIcons[item.icon ?? 'Clear']}
								{...(type === 'daily' && { date: item.date })}
							/>
						))}
					</div>
				</>
			)}
		</article>
	);
};
