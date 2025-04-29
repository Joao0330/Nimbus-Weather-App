import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { WeatherProvider } from './context/WeatherContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<WeatherProvider>
				<RouterProvider router={router} />
			</WeatherProvider>
		</QueryClientProvider>
	);
}

export default App;
