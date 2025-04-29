import { CiCloudOn } from 'react-icons/ci';
import { useWeather } from '../../context/WeatherContext';

export const CloudCoverCard = () => {
	const { weather, isLoading, isError } = useWeather();

	return (
		<article className='bottomCards'>
			<div className='flex items-center gap-3 text-gray-light mb-5'>
				<CiCloudOn className='text-2xl' />
				<h2 className='uppercase'>cloud cover</h2>
			</div>

			{isLoading && <p>Loading...</p>}
			{isError && <p>Error fetching weather data</p>}

			{weather && <strong className='text-3xl font-medium'>{weather?.clouds.all}%</strong>}
		</article>
	);
};
