import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const MyAttemptedAssignments = () => {
	const [submissions, setSubmissions] = useState([]);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		fetchAllSubmissions();
	}, [user]);
	const fetchAllSubmissions = async () => {
		const { data } = await axios.get(
			`${import.meta.env.VITE_API_URL}/submissions/${user?.email}`
		);
		setSubmissions(data);
	};

	return (
		<div className="py-24 bg-gray-100 px-8">
			<div className="flex flex-col justify-center items-center text-center">
				<h2 className="md:text-4xl text-4xl font-bold mb-4">My Attempted Assignments</h2>
			</div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-auto mt-12">
				<table className="w-full text-sm text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-200 tracking-wider columns-12">
						<tr>
							<th scope="col" className="py-3 px-6 text-left columns-2">
								Title
							</th>
							<th scope="col" className="py-3 px-6 text-center columns-1">
								Status
							</th>
							<th scope="col" className="py-3 px-6 text-right columns-1">
								Assignment Marks
							</th>
							<th scope="col" className="py-3 px-6 text-right columns-1">
								Obtained Marks
							</th>
							<th scope="col" className="py-3 px-6 text-left columns-4">
								Feedback
							</th>
						</tr>
					</thead>
					<tbody>
						{submissions.map(submission => (
							<tr key={submission._id} className="bg-white border-b hover:bg-gray-50">
								<td className="px-6 py-4 font-semibold text-gray-900 text-left">
									{submission.title}
								</td>
								<td className="px-6 py-4 flex justify-center">
									<div
										className={`badge badge-outline uppercase text-xs ${
											submission.status === 'Pending' ? 'badge-warning' : ''
										} ${
											submission.status === 'Completed' ? 'badge-success' : ''
										}`}>
										{submission.status}
									</div>
								</td>

								<td className="px-6 py-4 font-semibold text-gray-900 text-right">
									{submission.marks}
								</td>
								<td className="px-6 py-4 font-semibold text-gray-900 text-right">
									{submission.obtained_marks}
								</td>
								<td className="px-6 py-4 font-semibold text-gray-900 text-left">
									{submission.feedback}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyAttemptedAssignments;
