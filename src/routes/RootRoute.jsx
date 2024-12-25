import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PageNotFound from '../Pages/PageNotFound';
import LogIn from '../Pages/Authentication/LogIn';
import Register from '../Pages/Authentication/Register';
import PrivateRoutes from './PrivateRoutes';
import CreateAssignments from '../Pages/CreateAssignments';
import AllAssignments from '../Pages/AllAssignments';
import UpdateAssignment from '../Components/UpdateAssignment';

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
				path: '/assignments',
				element: <AllAssignments />,
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
			{
				path: '/update-assignment/:id',
				element: (
					<PrivateRoutes>
						<UpdateAssignment />
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
