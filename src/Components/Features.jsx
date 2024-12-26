const features = [
	{
		title: 'Create Assignments',
		description:
			'Create assignments for your friends and share learning tasks. Monitor progress and track completion.',
	},
	{
		title: 'Complete Assignments',
		description:
			'Take assignments from your friends, submit your work, and receive feedback and grades.',
	},
	{
		title: 'Grading System',
		description:
			"Grade your friends' assignments and provide valuable feedback to improve their learning experience.",
	},
	{
		title: 'Study Experience',
		description:
			'Engage with your friends and learn together in a collaborative, fun environment. Share notes and ideas!',
	},
];

const Features = () => {
	return (
		<section className="py-12 bg-base-100 px-4 lg:px-8">
			<div className="max-w-7xl mx-auto text-left">
				<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, i) => (
						<div key={i} className="card bg-white shadow-lg rounded-lg overflow-hidden">
							<div className="card-body p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
