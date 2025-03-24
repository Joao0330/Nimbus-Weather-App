import { FaTemperatureLow } from 'react-icons/fa';
import { IoRainyOutline, IoEyeOutline, IoWaterOutline } from 'react-icons/io5';

type WeatherDescCardProps = {
	type: 'temperature' | 'percipitation' | 'visibility' | 'humidity';
};

export const WeatherDescCard = ({ type }: WeatherDescCardProps) => {
	const iconMap = {
		temperature: <FaTemperatureLow className='text-xl' />,
		percipitation: <IoRainyOutline className='text-xl' />,
		visibility: <IoEyeOutline className='text-xl' />,
		humidity: <IoWaterOutline className='text-xl' />,
	};

	const titleMap = {
		temperature: 'Feels like',
		percipitation: 'Percipitation',
		visibility: 'Visibility',
		humidity: 'Humidity',
	};

	return (
		<article className='rounded-2xl p-3 text-white bg-gray-transparent'>
			<div className='flex items-center gap-3 text-gray-400'>
				{iconMap[type]}
				<p className='uppercase text-[0.95rem]'>{titleMap[type]}</p>
			</div>

			<strong className='text-3xl font-normal'>30ºC</strong>

			<p className='mt-5 text-[0.8rem]'>Humidity is making it feel warmer</p>
		</article>
	);
};
