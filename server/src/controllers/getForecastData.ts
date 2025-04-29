import { FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import { env } from '../env';

export const getForecastData = async (request: FastifyRequest<{ Querystring: { q: string } }>, reply: FastifyReply) => {
	const { q: city } = request.query;

	if (!city) {
		return reply.status(400).send({ error: 'City parameter (q) is required' });
	}

	try {
		// Current weather
		const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
			params: {
				q: city,
				units: 'metric',
				appid: env.API_KEY,
			},
		});
		reply.send(response.data);
	} catch (err) {
		reply.status(500).send({ error: 'Failed to fetch current weather' });
	}
};
