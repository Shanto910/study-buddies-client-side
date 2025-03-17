import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="p-10 pt-20 mt-24 rounded footer footer-center bg-base-200 text-base-content">
			<nav className="grid grid-flow-col gap-4">
				<Link to={'/'} className="link link-hover">
					Home
				</Link>
				<Link to={'/login'} className="link link-hover">
					Log In
				</Link>
				<Link to={'/register'} className="link link-hover">
					Register
				</Link>
				<Link to={'/assignments'} className="link link-hover">
					Assignments
				</Link>
			</nav>
			<aside>
				<p>Copyright © {new Date().getFullYear()} - All right reserved by Study Buddies</p>
			</aside>
		</footer>
	);
};

export default Footer;
