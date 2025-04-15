import { weatherDescCardTypes } from '../types/Weather.types';

export const getWeatherDescription = (type: weatherDescCardTypes['type'], value: number): string => {
	switch (type) {
		case 'temperature':
			if (value >= 25) return 'It feels quite hot outside right now!';
			if (value >= 16) return 'It feels warm outside right now!';
			if (value <= 15 && value >= 6) return 'It feels a bit chilly at the moment!';
			if (value <= 5) return "It's very cold outside! Don't forget to wear warm clothes!";
			break;
		case 'humidity':
			return value <= 50 ? "It's not very humid outside right now." : "It's quite humid outside at the moment";
		case 'precipitation':
			return value > 0 ? 'There is percipitation occurring in the area.' : 'There is no percipitation going on in the area.';
		default:
			return '';
	}
	return '';
};
