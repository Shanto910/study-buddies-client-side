import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
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
