import { weatherDescCardTypes } from '../types/Weather.types';

export const unitMap: Record<weatherDescCardTypes['type'], string> = {
	temperature: ' °C',
	humidity: ' %',
	precipitation: ' mm/h',
	visibility: ' m',
};
