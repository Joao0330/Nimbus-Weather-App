import { LuWind } from 'react-icons/lu';
import { WindCompass } from './WindCompass';
import { WindSpeedCardType } from './WindSpeedCardType';
import { useWindSpeed } from '../../hooks/useWindSpeed';
import { useWeather } from '../../context/WeatherContext';

export const WindSpeedCard = () => {
	const { weather, isLoading, isError } = useWeather();
	const { windDirection, windValues } = useWindSpeed();

	return (
		<article className='bottomCards'>
			<div className='flex gap-3'>
				<div className='flex flex-col w-3/5'>
					<div className='flex items-center gap-3 text-gray-light mb-5'>
						<LuWind className='text-xl' />
						<h2 className='uppercase'>wind</h2>
					</div>

					{isLoading && <p>Loading...</p>}
					{isError && <p>Error fetching weather data</p>}

					{weather && (
						<div>
							{windValues.map(item => (
								<WindSpeedCardType key={item.type} {...item} />
							))}
						</div>
					)}
				</div>

				<WindCompass windDirection={windDirection} />
			</div>
		</article>
	);
};
