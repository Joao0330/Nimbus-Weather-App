import { weatherForecastTypes } from '../../types/Weather.types';

export const WeatherForecastDetails = ({ /* type,*/ time, temperature, icon }: weatherForecastTypes) => {
	return (
		<article className={time === 'Now' ? 'forecastCard bg-gray-transparent' : 'forecastCard'}>
			<time className='text-sm'>{time}</time>
			<strong className='text-3xl font-medium'>{temperature + '°'}</strong>
			<img src={icon} alt={icon} className='w-[50px]' />
		</article>
	);
};
