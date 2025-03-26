import { IoEyeOutline, IoRainyOutline, IoWaterOutline } from 'react-icons/io5';
import { WeatherDesc } from '../components/weather/WeatherDesc';
import { WeatherDescCard } from '../components/weather/WeatherDescCard';
import { FaRegClock, FaTemperatureLow } from 'react-icons/fa';
import { WeatherDescCardData } from '../types/Weather.types';
import { SearchBar } from '../components/SearchBar';
import cloudyDay from '../assets/weather-icons/cloudy-day-2.svg';

export const Home = () => {
	const weatherDescCardData: WeatherDescCardData[] = [
		{ type: 'temperature', title: 'Feels like', value: '30', icon: <FaTemperatureLow className='text-xl' /> },
		{ type: 'percipitation', title: 'Percipitation', value: '30', icon: <IoRainyOutline className='text-xl' /> },
		{ type: 'visibility', title: 'Visibility', value: '30', icon: <IoEyeOutline className='text-xl' /> },
		{ type: 'humidity', title: 'Humidity', value: '30', icon: <IoWaterOutline className='text-xl' /> },
	];

	return (
		<section className='min-h-screen bg-[url(../src/assets/rain.gif)] bg-cover bg-no-repeat bg-center py-[7rem]'>
			<div className='container flex gap-5 p-6 rounded-xl bg-black-transparent border border-yellow-600'>
				<div className='w-2/5 flex flex-col gap-5'>
					<SearchBar />

					<article className='py-[5rem] px-4 border border-red-600 rounded-xl'>
						<WeatherDesc />

						<div className='grid grid-cols-2 gap-5'>
							{weatherDescCardData.map(({ type, title, value, icon }) => (
								<WeatherDescCard key={type} type={type} title={title} value={value} icon={icon} />
							))}
						</div>
					</article>
				</div>

				<div className='w-3/5'>
					<article className='p-5 text-white bg-darkBlue-transparent rounded-2xl'>
						<div className='flex items-center gap-3 py-2 text-gray-light border-b-2 border-gray mb-8'>
							<FaRegClock className='text-xl' />
							<h2 className='uppercase'>3-hour forecast</h2>
						</div>

						<div className='flex justify-between gap-7 overflow-x-scroll scrollbar'>
							<article className='forecastCard bg-gray-transparent'>
								<time className='text-sm'>Now</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
							<article className='forecastCard'>
								<time className='text-sm'>12:00</time>
								<strong className='text-3xl font-medium'>28°</strong>
								<img src={cloudyDay} alt='' className='w-[50px]' />
							</article>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};
