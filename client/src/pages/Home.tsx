import { WeatherDesc } from '../components/weather/WeatherDesc';
import { WeatherDescCard } from '../components/weather/WeatherDescCard';
import { SearchBar } from '../components/SearchBar';
import { WeatherForecastCard } from '../components/weather/WeatherForecastCard';
import { CloudCoverCard } from '../components/weather/CloudCoverCard';
import { WindSpeedCard } from '../components/weather/WindSpeedCard';
import { useWeather } from '../context/WeatherContext';
import { useWeatherDescCardData } from '../hooks/useWeatherDescCardData';
import { useAos } from '../hooks/useAos';

export const Home = () => {
	const { setCity } = useWeather();
	const weatherDescCardData = useWeatherDescCardData();

	useAos();

	return (
		<section className='min-h-screen background-gradient py-[7rem] max-[1170px]:px-[4rem] max-[640px]:px-[2rem] max-[500px]:px-[1rem]'>
			<div className='container flex gap-5 p-6 rounded-3xl bg-black-transparent max-[991px]:flex-col' data-aos='fade-down' data-aos-once='true'>
				<div className='w-2/5 flex flex-col gap-5 max-[991px]:w-full'>
					<SearchBar onSearch={setCity} />

					<article className='flex flex-col items-center py-[5rem] px-4 rounded-xl max-[550px]:px-0'>
						<WeatherDesc />

						<div className='grid grid-cols-2 gap-5 max-[991px]:w-full max-[550px]:grid-cols-1'>
							{weatherDescCardData.map(card => (
								<WeatherDescCard key={card.type} {...card} />
							))}
						</div>
					</article>
				</div>

				<div className='w-3/5 max-[991px]:w-full'>
					<WeatherForecastCard type='hourly' />
					<WeatherForecastCard type='daily' />

					<div className='flex gap-5 max-[600px]:flex-col'>
						<CloudCoverCard />
						<WindSpeedCard />
					</div>
				</div>
			</div>
		</section>
	);
};
