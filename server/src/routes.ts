import { FastifyInstance } from 'fastify';
import { getWeatherData } from './controllers/getWeatherData ';
import { getForecastData } from './controllers/getForecastData';

export const appRoutes = async (app: FastifyInstance) => {
	app.get('/weather', getWeatherData);
	app.get('/forecast', getForecastData);
};
