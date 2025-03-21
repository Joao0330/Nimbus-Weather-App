import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './pages/_layout/AppLayout';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [{ path: '/', element: <Home /> }],
	},
]);
