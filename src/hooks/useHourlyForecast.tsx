import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useWeather } from '../context/WeatherContext';
import { weatherForecastTypes } from '../types/Weather.types';

dayjs.extend(utc);

export const useHourlyForecast = (): weatherForecastTypes[] => {
	const { forecastWeather } = useWeather();

	const hourlyForecast = forecastWeather?.list.slice(0, 8);
	const timezone = forecastWeather?.city?.timezone ?? 0;

	if (!hourlyForecast) return [];

	return hourlyForecast.map(forecast => ({
		type: 'hourly',
		time: dayjs
			.unix(forecast.dt)
			.utcOffset(timezone / 60)
			.format('HH:mm'),
		temperature: Math.round(forecast.main.temp),
		icon: forecast.weather[0].main,
	}));
};
