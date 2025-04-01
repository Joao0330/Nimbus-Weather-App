import axios from 'axios';
import { API_KEY } from './apiKey';

export const api = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
	params: {
		units: 'metric',
		appid: API_KEY,
	},
});
