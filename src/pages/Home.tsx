import { IoEyeOutline, IoRainyOutline, IoWaterOutline } from 'react-icons/io5';
import { WeatherDesc } from '../components/weather/WeatherDesc';
import { WeatherDescCard } from '../components/weather/WeatherDescCard';
import { FaTemperatureLow } from 'react-icons/fa';
import { weatherDescCardTypes } from '../types/Weather.types';
import { SearchBar } from '../components/SearchBar';
import { WeatherForecastCard } from '../components/weather/WeatherForecastCard';
import { CloudCoverCard } from '../components/weather/CloudCoverCard';
import { WindSpeedCard } from '../components/weather/WindSpeedCard';

export const Home = () => {
	const weatherDescCardData: weatherDescCardTypes[] = [
		{ type: 'temperature', title: 'Feels like', value: '30', icon: <FaTemperatureLow className='text-xl' /> },
		{ type: 'percipitation', title: 'Percipitation', value: '30', icon: <IoRainyOutline className='text-xl' /> },
		{ type: 'visibility', title: 'Visibility', value: '30', icon: <IoEyeOutline className='text-xl' /> },
		{ type: 'humidity', title: 'Humidity', value: '30', icon: <IoWaterOutline className='text-xl' /> },
	];

	//!const windDirection = 45;

	return (
		<section className='min-h-screen bg-[url(../src/assets/rain.gif)] bg-cover bg-no-repeat bg-center py-[7rem]'>
			<div className='container flex gap-5 p-6 rounded-xl bg-black-transparent'>
				<div className='w-2/5 flex flex-col gap-5'>
					<SearchBar />

					<article className='flex flex-col items-center justify-between py-[5rem] px-4 rounded-xl'>
						<WeatherDesc />

						<div className='grid grid-cols-2 gap-5'>
							{weatherDescCardData.map(({ type, title, value, icon }) => (
								<WeatherDescCard key={type} type={type} title={title} value={value} icon={icon} />
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
