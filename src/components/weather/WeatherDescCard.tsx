import { WeatherDescCardData } from '../../types/Weather.types';

export const WeatherDescCard = ({ /* type */ title, value, icon }: WeatherDescCardData) => {
	//! An example of how to handle the description text for the future.
	/* let description;

	if (type === "temperature" && Number(value) > 25) {
		description = "Today is a hot day!";
	} */

	return (
		<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
			<div className='flex items-center gap-3 text-gray-400'>
				{icon}
				<p className='uppercase text-[0.95rem]'>{title}</p>
			</div>

			<strong className='text-3xl font-normal'>{value}</strong>

			<p className='mt-5 text-[0.8rem]'>Humidity is making it feel warmer</p>
		</article>
	);
};
