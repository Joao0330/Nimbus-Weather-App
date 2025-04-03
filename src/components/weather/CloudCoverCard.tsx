import { CiCloudOn } from 'react-icons/ci';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import { useWeather } from '../../context/WeatherContext';

export const CloudCoverCard = () => {
	const { city } = useWeather();
	const { weather } = useFetchWeather(city);

	return (
		<article className='bottomCards'>
			<div className='flex items-center gap-3 text-gray-light mb-5'>
				<CiCloudOn className='text-2xl' />
				<h2 className='uppercase'>cloud cover</h2>
			</div>

			<strong className='text-3xl font-medium'>{weather?.clouds.all}%</strong>
		</article>
	);
};
