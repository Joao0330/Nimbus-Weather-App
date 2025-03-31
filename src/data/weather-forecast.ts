import { weatherForecastTypes, windVariationTypes } from '../types/Weather.types';

export const weatherForecastData: weatherForecastTypes[] = [
	{ type: 'hourly', time: 'Now', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '03:00', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '06:00', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '09:00', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '12:00', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '15:00', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '18:00', temperature: 28, icon: 'cloudyDay2' },
	{ type: 'hourly', time: '21:00', temperature: 28, icon: 'cloudyDay2' },
];

export const dailyWeatherForecastData: weatherForecastTypes[] = [
	{ type: 'daily', time: 'Today', date: '28/03', temperature: -2, icon: 'snowy4' },
	{ type: 'daily', time: 'Thu', date: '29/03', temperature: -5, icon: 'snowy4' },
	{ type: 'daily', time: 'Fri', date: '30/03', temperature: -3, icon: 'snowy5' },
	{ type: 'daily', time: 'Sat', date: '31/03', temperature: -7, icon: 'snowy6' },
	{ type: 'daily', time: 'Sun', date: '01/04', temperature: -14, icon: 'snowy6' },
];

export const windVariation: windVariationTypes[] = [
	{ type: 'Wind', value: 3 },
	{ type: 'Gusts', value: 3 },
];
