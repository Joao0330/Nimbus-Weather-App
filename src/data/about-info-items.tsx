import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GrMapLocation } from 'react-icons/gr';
import { MdDevicesOther } from 'react-icons/md';
import { aboutInfoItemTypes } from '../types/About.types';

export const aboutInfoItems: aboutInfoItemTypes[] = [
	{
		icon: <TiWeatherPartlySunny className='text-5xl' />,
		title: 'Precise Weather Data',
		description: 'Real time weather data from around the world.',
	},
	{
		icon: <GrMapLocation className='text-5xl' />,
		title: 'Weather Maps',
		description: 'Visualize the forecast with dynamic weather maps.',
	},
	{
		icon: <MdDevicesOther className='text-5xl' />,
		title: 'Responsive Layout',
		description: 'Optimized for desktop, tablet, and mobile.',
	},
];
