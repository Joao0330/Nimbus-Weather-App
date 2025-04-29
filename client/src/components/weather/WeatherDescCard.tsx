import { unitMap } from '../../data/weather-forecast';
import { getWeatherDescription } from '../../lib/getWeatherDescription';
import { weatherDescCardTypes } from '../../types/Weather.types';

export const WeatherDescCard = ({ type, title, value, icon }: weatherDescCardTypes) => {
	const unit = unitMap[type] ?? '';
	const description = getWeatherDescription(type, value);

	return (
		<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
			<div className='flex items-center gap-3 text-gray-400 mb-2'>
				{icon}
				<p className='uppercase text-[0.95rem]'>{title}</p>
			</div>

			<strong className='text-3xl font-normal'>{value + unit}</strong>

			<p className='mt-5 text-[0.8rem]'>{description}</p>
		</article>
	);
};
