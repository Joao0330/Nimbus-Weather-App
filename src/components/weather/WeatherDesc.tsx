import { useWeather } from '../../context/WeatherContext';
/* import { useFetchWeather } from '../../hooks/useFetchWeather'; */

export const WeatherDesc = () => {
	const { /* city, */ weather, loading, error } = useWeather();
	/* const { weather, loading, error } = useFetchWeather(city, 'current'); */

	return (
		<div className='flex flex-col items-center justify-center gap-5 text-white text-center mb-[6rem]'>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}

			{weather && (
				<>
					<strong className='text-5xl font-medium mb-[4rem]'>{weather.name}</strong>
					<strong className='text-7xl font-normal'>{Math.round(weather.main.temp)}°C</strong>
					<p className='text-3xl'>{weather.weather[0].main}</p>
				</>
			)}

			<p className='text-sm mt-7.5 leading-6'>
				Rain is falling steadily, covering the sky with gray clouds. Don't forget your umbrella if you're heading out, and stay alert as roads may be slippery.
			</p>
		</div>
	);
};
