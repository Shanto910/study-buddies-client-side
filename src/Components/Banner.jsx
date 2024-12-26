import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div
			className="hero min-h-[calc(100vh-64px)]"
			style={{
				backgroundImage: 'url(https://wallpaperaccess.com/full/931292.png)',
			}}>
			<div className="hero-overlay bg-opacity-80"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-2xl">
					<h1 className="mb-5 text-5xl font-bold text-white">
						Welcome to Study Buddies!
					</h1>
					<p className="mb-5">
						Join your friends in an interactive and productive study environment.
						Create, complete, and grade assignments together in a collaborative space.
					</p>
					<Link to={'/register'} className="btn btn-accent">
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
