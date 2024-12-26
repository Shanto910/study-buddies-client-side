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
			`${import.meta.env.VITE_API_URL}/all-submissions?status=Pending`
		);
		setSubmissions(data);
	};

	return (
		<div className="py-24 bg-gray-100 px-8">
			<div className="flex flex-col justify-center items-center text-center">
				<h2 className="md:text-4xl text-4xl font-bold mb-4">My Attempted Assignments</h2>
			</div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-5xl mx-auto mt-12">
				<table className="w-full text-sm text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-200 tracking-wider">
						<tr>
							<th scope="col" className="py-3 px-6 text-left columns-2">
								Title
							</th>
							<th scope="col" className="py-3 px-6 text-right columns-1">
								Assignment Marks
							</th>
							<th scope="col" className="py-3 px-6 text-center columns-1">
								Examinee Name
							</th>
							<th scope="col" className="py-3 px-6 text-center columns-1">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{submissions.map(submission => (
							<tr key={submission._id} className="bg-white border-b hover:bg-gray-50">
								<td className="px-6 py-4 font-semibold text-gray-900 text-left">
									{submission.title}
								</td>

								<td className="px-6 py-4 font-semibold text-gray-900 text-right">
									{submission.marks}
								</td>
								<td className="px-6 py-4 font-semibold text-gray-900 text-center">
									{submission.submitted_by_name}
								</td>
								<td className="px-6 py-4 flex justify-center">
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
