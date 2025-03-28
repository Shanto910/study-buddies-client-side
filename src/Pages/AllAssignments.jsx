import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Components/Cards';

const AllAssignments = () => {
	const [assignments, setAssignments] = useState([]);
	const [filter, setFilter] = useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetchAllAssignments();
	}, [filter, search]);

	const fetchAllAssignments = async () => {
		const { data } = await axios.get(
			`${import.meta.env.VITE_API_URL}/assignments?filter=${filter}&search=${search}`
		);
		setAssignments(data);
	};

	const handleReset = () => {
		setFilter('');
		setSearch('');
	};

	return (
		<div className="px-4 py-20 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-2xl font-bold md:text-4xl text-accent">
						Assignments Overview
					</h2>
					<p className="text-xl max-w-[62ch] mx-auto">
						Explore your upcoming assignments, each with detailed information to assist
						in effective academic planning.
					</p>
				</div>
				<div>
					<div className="flex items-center justify-center gap-6 mb-8">
						<div className="join">
							<div>
								<div>
									<input
										className="input input-bordered join-item"
										placeholder="Search"
										onChange={e => setSearch(e.target.value)}
										value={search}
									/>
								</div>
							</div>
							<select
								className="select select-bordered join-item"
								onChange={e => setFilter(e.target.value)}
								value={filter}>
								<option value="">Filter By Difficulty</option>
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</select>
							<div className="indicator">
								<button onClick={handleReset} className="btn btn-accent join-item">
									Reset
								</button>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
						{assignments.map(assign => (
							<Cards
								key={assign._id}
								assign={assign}
								fetchAllAssignments={fetchAllAssignments}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllAssignments;
