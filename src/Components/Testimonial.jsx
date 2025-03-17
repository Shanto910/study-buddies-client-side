const testimonials = [
	{
		name: 'Sarah Johnson',
		feedback:
			'This platform has transformed the way I study! The group collaboration tools are amazing.',
		rating: 5,
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'Michael Smith',
		feedback:
			'I love the real-time discussions and assignment submission features. Very easy to use!',
		rating: 4,
		avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
	},
	{
		name: 'Emily Davis',
		feedback: 'The grading system and feedback tools are super helpful. Highly recommend!',
		rating: 5,
		avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
	},
];

const Testimonial = () => {
	return (
		<section className="px-4 py-12 bg-base-200">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
				<p className="mt-2 text-gray-600">
					Join thousands of students improving their learning experience!
				</p>
			</div>

			<div className="grid h-full grid-cols-1 gap-6 mx-auto mt-8 max-w-7xl sm:grid-cols-2 md:grid-cols-3">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="flex flex-col flex-1 p-6 text-center bg-white shadow-lg rounded-2xl">
						<img
							src={testimonial.avatar}
							alt={testimonial.name}
							className="w-16 h-16 mx-auto border-2 border-gray-600 rounded-full"
						/>
						<h3 className="mt-3 text-lg font-semibold">{testimonial.name}</h3>
						<p className="my-2 text-gray-600">{testimonial.feedback}</p>
						<div className="flex justify-center mt-auto">
							{Array.from({ length: testimonial.rating }).map((_, i) => (
								<span key={i} className="text-xl text-yellow-500">
									★
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonial;
