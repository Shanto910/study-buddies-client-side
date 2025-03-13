import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PendingAssignments = () => {
	const [submissions, setSubmissions] = useState([]);

	useEffect(() => {
		fetchAllPending();
	}, []);

	const fetchAllPending = async () => {
		const { data } = await axios.get(
			`${import.meta.env.VITE_API_URL}/submissions?status=Pending`
		);
		setSubmissions(data);
	};

	return (
		<div className="px-8 py-24">
			<div className="flex flex-col items-center justify-center text-center">
				<h2 className="mb-4 text-4xl font-bold md:text-4xl text-accent">
					Pending Assignments
				</h2>
			</div>
			<div className="relative max-w-5xl mx-auto mt-12 overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-gray-500">
					<thead className="text-xs tracking-wider text-gray-700 uppercase bg-gray-200">
						<tr>
							<th scope="col" className="px-6 py-3 text-left columns-2">
								Title
							</th>
							<th scope="col" className="px-6 py-3 text-right columns-1">
								Assignment Marks
							</th>
							<th scope="col" className="px-6 py-3 text-center columns-1">
								Examinee Name
							</th>
							<th scope="col" className="px-6 py-3 text-center columns-1">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{submissions.map(submission => (
							<tr key={submission._id} className="bg-white border-b hover:bg-gray-50">
								<td className="px-6 py-4 font-semibold text-left text-gray-900">
									{submission.title}
								</td>

								<td className="px-6 py-4 font-semibold text-right text-gray-900">
									{submission.marks}
								</td>
								<td className="px-6 py-4 font-semibold text-center text-gray-900">
									{submission.submitted_by_name}
								</td>
								<td className="flex justify-center px-6 py-4">
									<Link
										to={`/submission-details/${submission._id}`}
										className="btn btn-accent">
										Give Mark
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PendingAssignments;
