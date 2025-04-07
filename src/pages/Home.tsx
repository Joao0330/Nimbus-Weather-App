import { WeatherDesc } from '../components/weather/WeatherDesc';
import { WeatherDescCard } from '../components/weather/WeatherDescCard';
import { SearchBar } from '../components/SearchBar';
import { WeatherForecastCard } from '../components/weather/WeatherForecastCard';
import { CloudCoverCard } from '../components/weather/CloudCoverCard';
import { WindSpeedCard } from '../components/weather/WindSpeedCard';
import { useWeather } from '../context/WeatherContext';
import { useWeatherDescCardData } from '../hooks/useWeatherDescCardData';

export const Home = () => {
	const { setCity } = useWeather();
	const weatherDescCardData = useWeatherDescCardData();

	return (
		<section className='min-h-screen bg-[url(../src/assets/rain.gif)] bg-cover bg-no-repeat bg-center py-[7rem]'>
			<div className='container flex gap-5 p-6 rounded-xl bg-black-transparent'>
				<div className='w-2/5 flex flex-col gap-5'>
					<SearchBar onSearch={setCity} />

					<article className='flex flex-col items-center py-[5rem] px-4 rounded-xl'>
						<WeatherDesc />

						<div className='grid grid-cols-2 gap-5'>
							{weatherDescCardData.map(card => (
								<WeatherDescCard key={card.type} {...card} />
							))}
						</div>
					</article>
				</div>

				<div className='w-3/5'>
					<WeatherForecastCard type='hourly' />
					<WeatherForecastCard type='daily' />

					<div className='flex gap-5'>
						<CloudCoverCard />
						<WindSpeedCard />
					</div>
				</div>
			</div>
		</section>
	);
};
