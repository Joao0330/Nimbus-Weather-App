import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GrMapLocation } from 'react-icons/gr';
import { MdDevicesOther } from 'react-icons/md';

export const About = () => {
	return (
		<section className='min-h-screen bg-gray-900 text-white p-4 relative'>
			<div className='bg-[url(../src/assets/about_bg.jpg)] bg-cover bg-center min-h-[70vh] absolute top-0 left-0 right-0 z-0 overlay shadow-2xl flex items-center justify-center'>
				<div className='container flex flex-col items-center justify-center gap-10 h-full z-10'>
					<h2 className='text-5xl font-medium	 tracking-wider'>About Nimbus</h2>
					<p className='font-light text-gray-300'>Precision forecasts, built for everyday life.</p>
					<a href='https://github.com/Joao0330/React-Weather-App' target='_blank' className='button'>
						View on GitHub
					</a>
				</div>
			</div>

			<div className='container flex gap-5 relative w-full z-15 bg-gray-900 shadow-2xl mt-[60vh] p-6'>
				<div className='flex flex-col items-center justify-center gap-5 w-[33.333%]'>
					<TiWeatherPartlySunny className='text-5xl' />
					<h3 className='font-bold'>Precise Weather Data</h3>
					<p className='font-light text-gray-300 text-center'>Real time weather data from around the world.</p>
				</div>
				<div className='flex flex-col items-center justify-center gap-5 w-[33.333%]'>
					<GrMapLocation className='text-5xl' />
					<h3 className='font-bold'>Weather Maps</h3>
					<p className='font-light text-gray-300 text-center'>Visualize the forecast with dynamic weather maps.</p>
				</div>
				<div className='flex flex-col items-center justify-center gap-5 w-[33.333%]'>
					<MdDevicesOther className='text-5xl' />
					<h3 className='font-bold'>Responsive Layout</h3>
					<p className='font-light text-gray-300 text-center'>Optimized for desktop, tablet, and mobile.</p>
				</div>
			</div>

			<div className='container flex flex-col gap-5 py-[7rem]'>
				<h2 className='text-4xl font-bold mb-8'>About this project</h2>
				<p className='font-light text-gray-300'>Nimbus is a weather application built usibg React and Tailwind CSS. It provides real-time weather data and forecasts for any location worldwide.</p>
				<p className='font-light text-gray-300'>
					This app uses the{' '}
					<a href='https://openweathermap.org/api' target='_blank' className='text-blue-500 hover:underline'>
						OpenWeatherMap API
					</a>{' '}
					to fetch weather data and displays it in a user-friendly interface.
				</p>
				<p className='font-light text-gray-300'>
					The project is open source and available on{' '}
					<a href='https://github.com/Joao0330/React-Weather-App' target='_blank' className='text-blue-500 hover:underline'>
						GitHub.
					</a>
				</p>
			</div>
		</section>
	);
};
