import { IoHomeOutline, IoMapOutline } from 'react-icons/io5';
import { NavLinksProps } from '../types/GeneralTypes';
import { GoProjectRoadmap } from 'react-icons/go';

export const navbarLinks: NavLinksProps[] = [
	{
		url: '/',
		title: 'Home',
		icon: <IoHomeOutline />,
	},
	{
		url: '/about',
		title: 'About',
		icon: <GoProjectRoadmap />,
	},
	{
		url: '/weather-maps',
		title: 'Weather Maps',
		icon: <IoMapOutline />,
	},
];
