import { weatherForecastTypes } from '../../types/Weather.types';

export const WeatherForecastDetails = ({ type, time, date, temperature, icon, position }: weatherForecastTypes) => {
	return (
		<article className={position === 0 ? 'forecastCardDetails bg-gray-transparent' : 'forecastCardDetails'}>
			<time className='text-sm'>{time}</time>
			{type === 'daily' && <time className='text-xs text-gray-light'>{date}</time>}
			<strong className='text-3xl font-medium w-12 text-center'>{temperature + '°'}</strong>
			<img src={icon} alt={icon} />
		</article>
	);
};
