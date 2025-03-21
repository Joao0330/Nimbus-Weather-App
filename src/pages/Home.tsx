import { IoLocationOutline } from 'react-icons/io5';
import { FaTemperatureLow } from 'react-icons/fa';

export const Home = () => {
	return (
		<section className='min-h-screen bg-[url(../src/assets/rain.gif)] bg-cover bg-no-repeat bg-center py-[7rem]'>
			<div className='container flex gap-5 p-6 rounded-xl bg-black-transparent border border-yellow-600'>
				<div className='w-2/5 flex flex-col gap-5'>
					<form className='bg-gray text-white py-1.5 px-5 rounded-full flex items-center gap-2 shadow-2xl'>
						<IoLocationOutline className='text-2xl' />
						<input type='search' placeholder='Enter City' className='w-full outline-none' />
					</form>

					<article className='py-[5rem] px-4 border border-red-600 rounded-xl backdrop-opacity-60'>
						<div className='flex flex-col items-center justify-center gap-5 text-white text-center mb-[6rem]'>
							<strong className='text-7xl font-normal'>28ºC</strong>
							<p className='text-3xl'>Rainy Day</p>
							<p className='text-sm'>Today, expect a rainy day with temperatures reaching a maximum of 28ºC. Make sure to grab your umbrella before heading out.</p>
						</div>

						<div className='grid grid-cols-2 gap-5'>
							<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
								<div className='flex items-center gap-3 text-gray-400'>
									<FaTemperatureLow />
									<p className='uppercase text-[0.95rem]'>Feels like</p>
								</div>

								<strong className='text-3xl font-normal'>30ºC</strong>

								<p className='mt-5 text-[0.8rem]'>Humidity is making it feel warmer</p>
							</article>
							<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
								<div className='flex items-center gap-3 text-gray-400'>
									<FaTemperatureLow />
									<p className='uppercase text-[0.95rem]'>Feels like</p>
								</div>

								<strong className='text-3xl font-normal'>30ºC</strong>

								<p className='mt-5 text-[0.8rem]'>Humidity is making it feel warmer</p>
							</article>
							<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
								<div className='flex items-center gap-3 text-gray-400'>
									<FaTemperatureLow />
									<p className='uppercase text-[0.95rem]'>Feels like</p>
								</div>

								<strong className='text-3xl font-normal'>30ºC</strong>

								<p className='mt-5 text-[0.8rem]'>Humidity is making it feel warmer</p>
							</article>
							<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
								<div className='flex items-center gap-3 text-gray-400'>
									<FaTemperatureLow />
									<p className='uppercase text-[0.95rem]'>Feels like</p>
								</div>

								<strong className='text-3xl font-normal'>30ºC</strong>

								<p className='mt-5 text-[0.8rem]'>Humidity is making it feel warmer</p>
							</article>
						</div>
					</article>
				</div>

				<div className='w-3/5 border border-blue-600'>test</div>
			</div>
		</section>
	);
};
