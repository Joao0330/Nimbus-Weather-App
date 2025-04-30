import axios from 'axios';
import { FastifyRequest, FastifyReply } from 'fastify';
import { env } from '../env';

export const getMapData = async (
	request: FastifyRequest<{
		Params: { layer: string; z: string; x: string; y: string };
	}>,
	reply: FastifyReply,
) => {
	const { layer, z, x, y } = request.params;

	try {
		const response = await axios.get(`https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png`, {
			params: { appid: env.API_KEY },
			responseType: 'arraybuffer',
		});

		reply.send(response.data);
	} catch (err) {
		reply.status(500).send({ error: 'Failed to fetch weather map' });
	}
};
