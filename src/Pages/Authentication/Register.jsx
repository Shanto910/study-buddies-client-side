import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import toast from 'react-hot-toast';

const Register = () => {
	const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleRegister = async e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const name = form.name.value;
		const photo = form.photo.value;
		const password = form.password.value;

		if (!/[A-Z]/.test(password)) {
			toast.error('Password must contain at least one uppercase letter.');
			return;
		}
		if (!/[a-z]/.test(password)) {
			toast.error('Password must contain at least one lowercase letter.');
			return;
		}
		if (password.length < 6) {
			toast.error('Password must be at least 6 characters long.');
			return;
		}

		try {
			const result = await createUser(email, password);
			await updateUserProfile(name, photo);
			setUser({ ...result.user, photoURL: photo, displayName: name });
			navigate('/');
			toast.success('Yay! Register was successful!');
		} catch (err) {
			toast.error(err?.message);
		}
	};

	return (
		<div className="min-h-[calc(100vh-264px)] flex items-center justify-center my-16 px-4 lg:px-8">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl card-body">
				<form onSubmit={handleRegister}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="name"
							name="name"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Photo URL</span>
						</label>
						<input
							type="text"
							placeholder="photo"
							name="photo"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="password"
							name="password"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Register</button>
					</div>
					<label className="label">
						<span className="label-text-alt link link-hover">
							Already an user?{' '}
							<Link to={'/login'} className="text-primary">
								Log in here
							</Link>
						</span>
					</label>
				</form>
			</div>
		</div>
	);
};

export default Register;
