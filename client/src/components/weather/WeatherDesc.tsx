import { useWeather } from '../../context/WeatherContext';
import { weatherDescText } from '../../data/weather-forecast';
import { Loader } from '../Loader';

export const WeatherDesc = () => {
	const { weather, isLoading, isError } = useWeather();

	return (
		<div className='flex flex-col items-center justify-center gap-5 text-white text-center mb-[6rem] max-[991px]:gap-3'>
			{isLoading && <Loader />}
			{isError && <p>Error fetching weather data</p>}

			{weather && (
				<>
					<strong className='text-5xl font-medium mb-[4rem]'>{weather.name}</strong>
					<strong className='text-7xl font-normal max-[450px]:text-6xl'>{Math.round(weather.main.temp)}°C</strong>
					<p className='text-3xl'>{weather.weather[0].main}</p>

					<p className='text-sm mt-7.5 leading-6'>{weatherDescText[weather?.weather[0].main]}</p>
				</>
			)}
		</div>
	);
};
