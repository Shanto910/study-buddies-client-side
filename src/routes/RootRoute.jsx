import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PageNotFound from '../Pages/PageNotFound';
import LogIn from '../Pages/Authentication/LogIn';
import Register from '../Pages/Authentication/Register';
import PrivateRoutes from './PrivateRoutes';
import CreateAssignments from '../Pages/CreateAssignments';

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
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/pendingAssignments',
				element: (
					<PrivateRoutes>
						<h1>hello</h1>
					</PrivateRoutes>
				),
			},
			{
				path: '/createAssignments',
				element: (
					<PrivateRoutes>
						<CreateAssignments />
					</PrivateRoutes>
				),
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
