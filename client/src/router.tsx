import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './pages/_layout/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Maps } from './pages/Maps';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
			{ path: '/weather-maps', element: <Maps /> },
		],
	},
]);
