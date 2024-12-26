import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const SubmissionDetails = () => {
	const [submission, setSubmission] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const {
		googleLink,
		sideNote,
		assignmentId,
		title,
		marks,
		submitted_by_email,
		submitted_by_name,
	} = submission;

	useEffect(() => {
		fetchSubmission();
	}, []);
	const fetchSubmission = async () => {
		const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/submissions/${id}`);
		setSubmission(data);
	};

	const handleMarking = async e => {
		e.preventDefault();
		if (user?.email === submitted_by_email) return toast.error('Action not permitted!');

		const form = e.target;
		const obtained_marks = parseFloat(form.obtained_marks.value);
		const feedback = form.feedback.value;

		const submissionData = {
			googleLink,
			sideNote,
			assignmentId,
			title,
			marks,
			submitted_by_email,
			submitted_by_name,
			status: 'Completed',
			feedback,
			obtained_marks,
		};
		try {
			await axios.put(
				`${import.meta.env.VITE_API_URL}/submissions-marking/${id}`,
				submissionData
			);
			form.reset();
			navigate('/assignments');
			toast.success('Assignment Marked Successfully!');
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<div className="min-h-[calc(100vh-264px)] flex items-center justify-center my-16 px-4 lg:px-8">
			<div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl card-body">
				<p>
					<strong>Google docs link: </strong>
					<a href={submission.googleLink} target="_blank">
						{submission.googleLink}
					</a>
				</p>
				<p>
					<strong>Side note: </strong> {submission.sideNote}
				</p>
				<form onSubmit={handleMarking}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Marks</span>
						</label>
						<input
							type="number"
							placeholder="Marks"
							name="obtained_marks"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Feedback</span>
						</label>
						<textarea
							className="textarea textarea-bordered"
							placeholder="Feedback"
							name="feedback"
							required></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SubmissionDetails;
