import cloudy from '../assets/weather-icons/cloudy.svg';
import day from '../assets/weather-icons/day.svg';
import night from '../assets/weather-icons/night.svg';
import rainy5 from '../assets/weather-icons/rainy-5.svg';
import rainy6 from '../assets/weather-icons/rainy-6.svg';
import snowy6 from '../assets/weather-icons/snowy-6.svg';
import thunder from '../assets/weather-icons/thunder.svg';
import fog from '../assets/weather-icons/fog.svg';
import haze from '../assets/weather-icons/haze.svg';
import dust from '../assets/weather-icons/dust.svg';

export const weatherIcons: Record<string, string> = {
	Clouds: cloudy,
	Clear: day,
	night: night,
	Drizzle: rainy5,
	Rain: rainy6,
	Snow: snowy6,
	Thunderstorm: thunder,
	Mist: fog,
	Smoke: fog,
	Haze: haze,
	Dust: dust,
	Fog: fog,
	Sand: dust,
	Ash: fog,
};
