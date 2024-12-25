import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProviders';

const UpdateAssignment = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const { id } = useParams();
	const [startDate, setStartDate] = useState(new Date());
	const [assignment, setAssignment] = useState({});
	useEffect(() => {
		fetchAssignmentData();
	}, [id]);

	const fetchAssignmentData = async () => {
		const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignment/${id}`);
		setAssignment(data);
		setStartDate(new Date(data.deadline));
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const form = e.target;
		const creator_email = user?.email;
		const creator_username = user?.displayName;
		const title = form.title.value;
		const marks = form.marks.value;
		const difficulty = form.difficulty.value;
		const photo = form.photo.value;
		const description = form.description.value;

		const assignmentData = {
			created_By: {
				creator_email,
				creator_username,
			},
			title,
			marks,
			difficulty,
			photo,
			description,
			deadline: startDate,
		};
		try {
			await axios.put(
				`${import.meta.env.VITE_API_URL}/update-assignment/${id}`,
				assignmentData
			);
			form.reset();
			navigate('/assignments');
			toast.success('Assignment Updated Successfully!');
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<div className="min-h-[calc(100vh-264px)] flex items-center justify-center my-16 px-4 lg:px-8">
			<div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl card-body">
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-6 gap-4">
						<div className="form-control col-span-4">
							<label className="label">
								<span className="label-text">Title</span>
							</label>
							<input
								type="text"
								placeholder="title"
								name="title"
								className="input input-bordered"
								defaultValue={assignment.title}
								required
							/>
						</div>
						<div className="form-control col-span-4 md:col-span-2">
							<label className="label">
								<span className="label-text">Marks</span>
							</label>
							<input
								type="number"
								placeholder="marks"
								name="marks"
								className="input input-bordered"
								defaultValue={assignment.marks}
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-6 gap-4">
						{assignment.difficulty && (
							<div className="form-control col-span-4">
								<label className="label">
									<span className="label-text">Assignment difficulty level</span>
								</label>
								<select
									name="difficulty"
									className="select select-bordered"
									defaultValue={assignment.difficulty}>
									<option value={'easy'}>Easy</option>
									<option value={'medium'}>Medium</option>
									<option value={'hard'}>Hard</option>
								</select>
							</div>
						)}

						<div className="form-control col-span-4 md:col-span-2">
							<label className="label">
								<span className="label-text">Due Date</span>
							</label>
							<DatePicker
								className="input input-bordered w-full"
								selected={startDate}
								onChange={date => setStartDate(date)}
							/>
						</div>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Thumbnail Image URL</span>
						</label>
						<input
							type="text"
							placeholder="thumbnail image URL"
							name="photo"
							className="input input-bordered"
							defaultValue={assignment.photo}
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea
							className="textarea textarea-bordered"
							placeholder="description"
							name="description"
							defaultValue={assignment.description}
							required></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Update Assignment</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateAssignment;
