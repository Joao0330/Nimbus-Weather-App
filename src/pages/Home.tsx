import { IoLocationOutline } from 'react-icons/io5';
import { WeatherDesc } from '../components/weather/WeatherDesc';
import { WeatherDescCard } from '../components/weather/WeatherDescCard';

export const Home = () => {
	return (
		<section className='min-h-screen bg-[url(../src/assets/rain.gif)] bg-cover bg-no-repeat bg-center py-[7rem]'>
			<div className='container flex gap-5 p-6 rounded-xl bg-black-transparent border border-yellow-600'>
				<div className='w-2/5 flex flex-col gap-5'>
					<form className='bg-gray text-white py-1.5 px-5 rounded-full flex items-center gap-2 shadow-2xl'>
						<IoLocationOutline className='text-2xl' />
						<input type='search' placeholder='Enter City' className='w-full outline-none' />
					</form>

					<article className='py-[5rem] px-4 border border-red-600 rounded-xl'>
						<WeatherDesc />

						<div className='grid grid-cols-2 gap-5'>
							<WeatherDescCard type='temperature' />
							<WeatherDescCard type='percipitation' />
							<WeatherDescCard type='visibility' />
							<WeatherDescCard type='humidity' />
						</div>
					</article>
				</div>

				<div className='w-3/5 border border-blue-600'>test</div>
			</div>
		</section>
	);
};
