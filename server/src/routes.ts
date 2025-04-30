import { FastifyInstance } from 'fastify';
import { getWeatherData } from './controllers/getWeatherData ';
import { getForecastData } from './controllers/getForecastData';
import { getMapData } from './controllers/getMapData';

export const appRoutes = async (app: FastifyInstance) => {
	app.get('/weather', getWeatherData);
	app.get('/forecast', getForecastData);
	app.get('/weather-maps/:layer/:z/:x/:y.png', getMapData);
};
