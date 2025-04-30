import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://nimbus-backend-or5h.onrender.com',
});
