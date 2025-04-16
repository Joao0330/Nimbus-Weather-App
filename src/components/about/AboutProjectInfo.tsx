export const AboutProjectInfo = () => {
	return (
		<div className='container flex flex-col gap-5 py-[7rem]'>
			<h2 className='text-4xl font-bold mb-8'>About this project</h2>
			<p className='font-light text-gray-300'>Nimbus is a weather application built using React and Tailwind CSS. It provides real-time weather data and forecasts for any location worldwide.</p>
			<p className='font-light text-gray-300'>
				This app uses the{' '}
				<a href='https://openweathermap.org/api' target='_blank' className='text-blue-500 hover:underline'>
					OpenWeatherMap API
				</a>{' '}
				to fetch the weather data and displays it in a user-friendly interface.
			</p>
			<p className='font-light text-gray-300'>
				The project is open source and available on{' '}
				<a href='https://github.com/Joao0330/React-Weather-App' target='_blank' className='text-blue-500 hover:underline'>
					GitHub.
				</a>
			</p>
		</div>
	);
};
