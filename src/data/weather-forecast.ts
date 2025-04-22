import { layerOptionsTypes, weatherDescCardTypes } from '../types/Weather.types';

export const unitMap: Record<weatherDescCardTypes['type'], string> = {
	temperature: ' °C',
	humidity: ' %',
	precipitation: ' mm/h',
	visibility: ' m',
};

export const weatherDescText: Record<string, string> = {
	Clear: 'It is a clear day with no clouds above in the sky, the sun is shining, it is a perfect day for a walk outside.',
	Rain: "Rain is falling steadily, covering the sky with gray clouds. Don't forget your umbrella if you're heading out, and stay alert as roads may be slippery.",
	Thunderstorm: 'A thunderstorm is brewing, with dark clouds and flashes of lightning. Stay indoors and avoid open areas to stay safe.',
	Snow: 'Snow is falling gently, blanketing the ground in a soft white layer. It is a beautiful winter day, perfect for building snowmen or having snowball fights.',
	Drizzle: 'A light drizzle is falling, creating a refreshing atmosphere. It is a great time to enjoy a warm drink indoors or take a leisurely stroll with an umbrella.',
	Clouds: 'The sky is overcast with clouds, creating a gray and gloomy atmosphere. It may be a good day to stay indoors and enjoy some cozy activities.',
	Mist: 'The air is thick with mist, creating a mysterious and ethereal atmosphere. Visibility may be low, so be cautious if you are driving or walking outside.',
	Smoke: 'The air is filled with smoke, creating a hazy and unhealthy atmosphere. It is best to stay indoors and avoid outdoor activities until the air clears.',
	Haze: 'The air is hazy, creating a soft and diffused light. It may be a good day to enjoy some indoor activities or take a leisurely stroll outside.',
	Fog: 'Fog is rolling in, creating a mysterious and eerie atmosphere. Visibility may be low, so be cautious if you are driving or walking outside.',
	Dust: 'The air is filled with dust, creating a hazy and dry atmosphere. It is best to stay indoors and avoid outdoor activities until the air clears.',
	Sand: 'The air is filled with sand, creating a dry and gritty atmosphere. It is best to stay indoors and avoid outdoor activities until the air clears.',
	Ash: 'The air is filled with ash, creating a dark and smoky atmosphere. It is best to stay indoors and avoid outdoor activities until the air clears.',
	Squall: 'A squall is approaching, bringing strong winds and heavy rain. Stay indoors and avoid outdoor activities until the storm passes.',
	Tornado: 'A tornado is forming, creating a dangerous and destructive atmosphere. Seek shelter immediately and stay safe until the storm passes.',
};

export const layerOptions: layerOptionsTypes = {
	temp_new: 'Temperature',
	wind_new: 'Wind',
	clouds_new: 'Clouds',
	precipitation: 'Precipitation',
	pressure_new: 'Pressure',
};

export const mapLabels: Record<string, { label: string; values: number[]; gradientClass: string }> = {
	temp_new: {
		label: 'Temperature, °C',
		values: [-40, -20, 0, 20, 40],
		gradientClass: 'temperature-gradient',
	},
	wind_new: {
		label: 'Wind speed, m/s',
		values: [0, 2, 3, 6, 12, 25, 50, 100],
		gradientClass: 'wind-gradient',
	},
	clouds_new: {
		label: 'Cloudiness, %',
		values: [0, 25, 50, 75, 100],
		gradientClass: 'clouds-gradient',
	},
	pressure_new: {
		label: 'Pressure, hPa',
		values: [950, 980, 1010, 1040, 1070],
		gradientClass: 'pressure-gradient',
	},
};
