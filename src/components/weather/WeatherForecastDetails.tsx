import { weatherForecastTypes } from '../../types/Weather.types';

export const WeatherForecastDetails = ({ type, time, date, temperature, icon }: weatherForecastTypes) => {
	return (
		<article className={time === 'Now' || time === 'Today' ? 'forecastCard bg-gray-transparent' : 'forecastCard'}>
			<time className='text-sm'>{time}</time>
			{type === 'daily' && <time className='text-xs text-gray-light'>{date}</time>}
			<strong className='text-3xl font-medium'>{temperature + '°'}</strong>
			<img src={icon} alt={icon} className='w-[50px]' />
		</article>
	);
};
