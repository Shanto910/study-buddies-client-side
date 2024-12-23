import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PageNotFound from '../Pages/PageNotFound';
import LogIn from '../Pages/Authentication/LogIn';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <h1>home</h1>,
			},
			{
				path: '/login',
				element: <LogIn />,
			},
		],
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
]);

const RootRoute = () => {
	return <RouterProvider router={router} />;
};

export default RootRoute;
