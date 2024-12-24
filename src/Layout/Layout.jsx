import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Spinner from '../Components/Spinner';

const Layout = () => {
	const { loading } = useContext(AuthContext);
	if (loading) return <Spinner />;

	return (
		<>
			<Navbar />
			<div className="min-h-[calc(100vh-264px)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
