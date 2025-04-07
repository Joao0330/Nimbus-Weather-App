import { weatherDescCardTypes, weatherForecastTypes } from '../types/Weather.types';

export const unitMap: Record<weatherDescCardTypes['type'], string> = {
	temperature: ' °C',
	humidity: ' %',
	precipitation: ' mm/h',
	visibility: ' m',
};

export const dailyWeatherForecastData: weatherForecastTypes[] = [
	{ type: 'daily', time: 'Today', date: '28/03', temperature: -2, icon: 'snowy4' },
	{ type: 'daily', time: 'Thu', date: '29/03', temperature: -5, icon: 'snowy4' },
	{ type: 'daily', time: 'Fri', date: '30/03', temperature: -3, icon: 'snowy5' },
	{ type: 'daily', time: 'Sat', date: '31/03', temperature: -7, icon: 'snowy6' },
	{ type: 'daily', time: 'Sun', date: '01/04', temperature: -14, icon: 'snowy6' },
];
