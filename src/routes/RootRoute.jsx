import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PageNotFound from '../Pages/PageNotFound';
import LogIn from '../Pages/Authentication/LogIn';
import Register from '../Pages/Authentication/Register';
import PrivateRoutes from './PrivateRoutes';
import CreateAssignments from '../Pages/CreateAssignments';
import AllAssignments from '../Pages/AllAssignments';
import UpdateAssignment from '../Pages/UpdateAssignment';
import AssignmentDetails from '../Pages/AssignmentDetails';
import MyAttemptedAssignments from '../Pages/MyAttemptedAssignments';
import PendingAssignments from '../Pages/PendingAssignments';
import SubmissionDetails from '../Pages/SubmissionDetails';
import HomePage from '../Pages/HomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
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
				path: '/pending-assignments',
				element: (
					<PrivateRoutes>
						<PendingAssignments />
					</PrivateRoutes>
				),
			},
			{
				path: '/submission-details/:id',
				element: (
					<PrivateRoutes>
						<SubmissionDetails />
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
			{
				path: '/assignment-details/:id',
				element: (
					<PrivateRoutes>
						<AssignmentDetails />
					</PrivateRoutes>
				),
			},
			{
				path: '/my-attempted-assignments/:email',
				element: (
					<PrivateRoutes>
						<MyAttemptedAssignments />
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
