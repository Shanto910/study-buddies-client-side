const resources = [
	{
		title: 'Assignment Writing Guide',
		description:
			'Master the art of assignment writing with this step-by-step guide. Learn how to structure your content, format citations, and present your ideas effectively to get the best grades.',
		link: 'https://en.wikipedia.org/wiki/Wikipedia:Student_assignments',
	},
	{
		title: 'Best Online Study Tools',
		description:
			'Discover the most useful online tools for students, including research databases, AI-powered note-taking apps, and productivity enhancers that will streamline your study sessions.',
		link: 'https://en.wikipedia.org/wiki/Study_software',
	},
	{
		title: 'Time Management Tips',
		description:
			'Struggling to balance studies and personal life? Learn how to plan your day efficiently, avoid procrastination, and boost productivity with proven time management techniques.',
		link: 'https://en.wikipedia.org/wiki/Time_management',
	},
];

const Resources = () => {
	return (
		<section className="px-4 py-12">
			<div className="mx-auto text-center max-w-7xl">
				<h2 className="text-3xl font-bold text-gray-800">Study Resources</h2>
				<p className="mt-2 text-gray-600">
					Explore helpful guides and tools to boost your learning experience.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 mx-auto mt-8 max-w-7xl sm:grid-cols-2 md:grid-cols-3">
				{resources.map((resource, index) => (
					<div key={index} className="flex flex-col flex-1 p-6 rounded-lg shadow-md">
						<h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
						<p className="my-2 text-gray-600">{resource.description}</p>
						<a
							href={resource.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block mt-auto font-medium text-accent hover:underline">
							Read More →
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Resources;
