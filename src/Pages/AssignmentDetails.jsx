import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { AuthContext } from '../Providers/AuthProviders';
import toast from 'react-hot-toast';

const AssignmentDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [assignment, setAssignment] = useState({});
	const { user } = useContext(AuthContext);

	const { title, marks, description, photo, difficulty, deadline, _id } = assignment;

	useEffect(() => {
		fetchAssignmentData();
	}, [id]);

	const fetchAssignmentData = async () => {
		const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignment/${id}`);
		setAssignment(data);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.target;
		const googleLink = form.googlelink.value || '';
		const sideNote = form.sidenote.value;
		const assignmentId = _id;

		const submissionData = {
			googleLink,
			sideNote,
			assignmentId,
			title,
			marks,
			submitted_by: user?.email,
			status: 'Pending',
		};

		try {
			await axios.post(`${import.meta.env.VITE_API_URL}/add-submission`, submissionData);
			form.reset();
			navigate('/');
			toast.success('Assignment Submitted Successfully!');
			console.log(submissionData);
		} catch (err) {
			toast.error(err?.response?.data);
		}
	};

	return (
		<div className="bg-gray-100 py-24 px-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="md:text-4xl text-4xl font-bold mb-2">{title}</h2>
				<span className="text-xl">
					Marks: <span className="">{marks}</span>
				</span>
				<div className="flex flex-col lg:flex-row mt-4 gap-8">
					<div className="grow max-w-4xl">
						<img className="w-full rounded-2xl mb-4" src={photo} alt="" />
						<p className="text-xl ">
							{' '}
							<strong>Assignment Description:</strong> {description}
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col">
							<span className="text-xl">Difficulty</span>
							<span className="text-xl ">{difficulty}</span>
						</div>
						<div className="flex flex-col">
							<span className="text-xl">Deadline</span>
							{deadline && (
								<span className="text-xl ">{format(new Date(deadline), 'P')}</span>
							)}
						</div>
						<button
							onClick={() => document.getElementById('my_modal_1').showModal()}
							className="btn btn-accent text-nowrap text-lg text-white">
							Take assignment
						</button>
						<dialog id="my_modal_1" className="modal">
							<div className="modal-box">
								<form onSubmit={handleSubmit}>
									<div className="form-control col-span-4">
										<label className="label">
											<span className="label-text">Google docs link</span>
										</label>
										<input
											type="text"
											placeholder="Submit your google docs link"
											name="googlelink"
											className="input input-bordered"
											required
										/>
									</div>
									<div className="form-control">
										<label className="label">
											<span className="label-text">Side Note</span>
										</label>
										<textarea
											className="textarea textarea-bordered"
											placeholder="Side note"
											name="sidenote"
											required></textarea>
									</div>
									<button className="btn btn-accent w-full mt-5">Submit</button>
								</form>
							</div>
						</dialog>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssignmentDetails;
