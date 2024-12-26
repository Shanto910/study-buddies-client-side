import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	return (
		<div className="bg-base-200">
			<div className="max-w-7xl mx-auto px-4 lg:px-8">
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown dropdown-start md:hidden">
							<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h7"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
								<li>
									<NavLink to={'/assignments'}>Assignments</NavLink>
								</li>
								{user?.email && (
									<li>
										<NavLink to={'/pendingAssignments'}>
											Pending Assignments
										</NavLink>
									</li>
								)}
							</ul>
						</div>

						<Link className="btn btn-ghost text-xl">Study Buddies</Link>
					</div>

					<div className="navbar-end">
						<div className="hidden md:flex">
							<NavLink to={'/assignments'} className="btn btn-ghost text-base">
								Assignments
							</NavLink>
							{user?.email && (
								<NavLink
									to={'/pending-assignments'}
									className="btn btn-ghost text-base">
									Pending Assignments
								</NavLink>
							)}
						</div>

						{user?.email ? (
							<>
								<div className="dropdown dropdown-end">
									<div
										tabIndex={0}
										role="button"
										className="btn btn-ghost btn-circle avatar tooltip tooltip-accent tooltip-bottom"
										data-tip={user?.displayName}>
										<div className="rounded-full ">
											<img referrerPolicy="no-referrer" src={user.photoURL} />
										</div>
									</div>
									<ul
										tabIndex={0}
										className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 shadow">
										<li>
											<NavLink to={'/createAssignments'}>
												Create Assignments
											</NavLink>
										</li>
										<li>
											<NavLink
												to={`/my-attempted-assignments/${user?.email}`}>
												My Attempted Assignments
											</NavLink>
										</li>
									</ul>
								</div>
								<button onClick={logOut} className="btn btn-ghost">
									Log Out
								</button>
							</>
						) : (
							<Link to={'/login'} className="btn btn-accent">
								Log In
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
