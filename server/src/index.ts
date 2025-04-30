import { app } from './app';
import { env } from './env';

const PORT = env.PORT || 3333;

app.listen({ port: PORT }, () => {
	console.log(`Server is running on port ${env.PORT}`);
});
