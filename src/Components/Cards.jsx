import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import toast from 'react-hot-toast';
import axios from 'axios';

const Cards = ({ assign, fetchAllAssignments }) => {
	const { title, marks, difficulty, photo, created_By, _id } = assign;
	const { user } = useContext(AuthContext);

	const handleDelete = async id => {
		try {
			await axios.delete(`${import.meta.env.VITE_API_URL}/assignments/${id}`);
			toast.success('Assignment Deleted Successfully!');
			fetchAllAssignments();
		} catch (err) {
			toast.error(err.message);
		}
	};

	const modernDelete = id => {
		if (user?.email !== created_By.creator_email) return toast.error('Action not permitted!');

		toast(t => (
			<div className="flex gap-3 flex-col">
				<div>
					<p>Are you sure? This action is irreversible</p>
				</div>
				<div className="gap-2 flex">
					<button
						className="btn btn-sm btn-error"
						onClick={() => {
							toast.dismiss(t.id);
							handleDelete(id);
						}}>
						Yes
					</button>
					<button className="btn btn-sm" onClick={() => toast.dismiss(t.id)}>
						No
					</button>
				</div>
			</div>
		));
	};

	return (
		<div className="mx-auto w-full rounded-2xl shadow-lg">
			<section
				style={{
					backgroundImage: `linear-gradient(hsla(0, 0%, 0%, 0.45), hsla(0, 0%, 0%, 0.45)), url(${photo})`,
				}}
				className="relative rounded-t-2xl p-5 h-60 bg-cover">
				<header className="flex justify-between items-center gap-4 font-bold">
					<div
						className={`badge badge-outline uppercase tracking-widest cursor-default ${
							difficulty === 'easy' ? 'badge-accent' : ''
						} ${difficulty === 'medium' ? 'badge-warning' : ''} ${
							difficulty === 'hard' ? 'badge-error' : ''
						}`}>
						{difficulty}
					</div>
					<div className="flex gap-3">
						<div className="p-3 bg-base-100 rounded-full text-lg cursor-pointer">
							<MdUpdate />
						</div>
						<div
							onClick={() => modernDelete(_id)}
							className="p-3 bg-base-100 rounded-full text-lg cursor-pointer">
							<RiDeleteBin6Line />
						</div>
					</div>
				</header>
				<span className="absolute bottom-4 right-4 border-2 bg-opacity-10 bg-info border-info text-info py-2 px-4 rounded-full cursor-default font-semibold">
					Marks: {marks}
				</span>
			</section>

			<footer className="flex flex-col justify-start items-start flex-nowrap p-3 gap-4 font-bold">
				<div>
					<p className="text-ellipsis overflow-hidden max-w-[32ch] lg:max-w-[30ch] xl:max-w-[42ch] text-nowrap">
						{title}
					</p>
				</div>

				<Link
					to={'/assignment-details'}
					className="cursor-pointer py-2 px-5 rounded-full bg-accent text-white font-semibold">
					View assignment
				</Link>
			</footer>
		</div>
	);
};

export default Cards;
