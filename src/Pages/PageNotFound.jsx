import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center h-screen gap-4 px-8 text-center">
			<h1 className="font-semibold text-3xl dark:text-blue-400">Oops! You're lost.</h1>
			<p className="dark:text-white">The page you are looking for does not exist.</p>
			<Link
				to={'/'}
				className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
				Go Back Home
			</Link>
		</div>
	);
};

export default PageNotFound;
