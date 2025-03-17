import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CreateAssignments = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.target;
		const creator_email = user?.email;
		const creator_username = user?.displayName;
		const title = form.title.value;
		const marks = parseFloat(form.marks.value);
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
			await axios.post(`${import.meta.env.VITE_API_URL}/create-assignment`, assignmentData);
			form.reset();

			navigate('/assignments');
			toast.success('Assignment created successfully!');
		} catch (err) {
			toast.error(err?.response?.data);
		}
	};

	return (
		<div className="min-h-[calc(100vh-264px)] my-16 px-4 lg:px-8">
			<div className="flex flex-col items-center justify-center mb-12 text-center">
				<h2 className="text-4xl font-bold md:text-4xl text-accent">Create Assignments</h2>
			</div>
			<div className="w-full max-w-2xl mx-auto shadow-2xl card bg-base-100 shrink-0 card-body">
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
						<div className="col-span-4 form-control">
							<label className="label">
								<span className="label-text">Title</span>
							</label>
							<input
								type="text"
								placeholder="title"
								name="title"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="col-span-4 form-control md:col-span-2">
							<label className="label">
								<span className="label-text">Marks</span>
							</label>
							<input
								type="number"
								placeholder="marks"
								name="marks"
								className="input input-bordered"
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
						<div className="col-span-4 form-control">
							<label className="label">
								<span className="label-text">Assignment difficulty level</span>
							</label>
							<select name="difficulty" className="select select-bordered">
								<option value={'easy'}>Easy</option>
								<option value={'medium'}>Medium</option>
								<option value={'hard'}>Hard</option>
							</select>
						</div>

						<div className="col-span-4 form-control md:col-span-2">
							<label className="label">
								<span className="label-text">Due Date</span>
							</label>
							<DatePicker
								className="w-full input input-bordered"
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
							required></textarea>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-accent">Submit Assignment</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAssignments;
