import { useWeather } from '../context/WeatherContext';
import { weatherForecastTypes } from '../types/Weather.types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const useDailyForecast = (): weatherForecastTypes[] => {
	const { forecastWeather } = useWeather();
	const list = forecastWeather?.list;
	const timezone = forecastWeather?.city?.timezone ?? 0;

	if (!list) return [];

	const dailyForecast: weatherForecastTypes[] = [];
	const seenDates = new Set();

	for (let i = 0; i < list.length; i++) {
		const item = list[i];
		const date = dayjs.unix(item.dt).format('YYYY-MM-DD');
		const hour = dayjs.unix(item.dt).hour();

		if (!seenDates.has(date) && hour >= 11 && hour <= 13) {
			seenDates.add(date);

			dailyForecast.push({
				type: 'daily',
				time: dayjs.unix(item.dt).format('ddd'),
				date: dayjs
					.unix(item.dt)
					.utcOffset(timezone / 60)
					.format('DD/MM'),
				temperature: Math.round(item.main.temp),
				icon: item.weather[0].main,
			});
		}
	}

	return dailyForecast;
};
