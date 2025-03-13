import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const questions = [
	{
		question: 'How do I create an assignment?',
		answer: 'To create an assignment, simply log in, go to the "Create Assignment" page, and fill out the required fields.',
	},
	{
		question: 'Can I grade my own assignments?',
		answer: 'No, you can only grade assignments submitted by others. You can check your own results on the "My attempted assignments" page.',
	},
	{
		question: 'How do I submit my assignment?',
		answer: 'To submit your assignment, go to the assignment details page and click the "Take Assignment" button. You’ll then be able to submit your work via a Google Docs link and a brief note.',
	},
	{
		question: 'Is my data secure on this platform?',
		answer: 'Yes, we use Firebase authentication and store data securely. Your assignments and grades are kept private and safe.',
	},
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = index => {
		setActiveIndex(prevIndex => (prevIndex === index ? null : index));
	};

	return (
		<div className="px-4 mx-auto mt-24 max-w-7xl md:px-8">
			<h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
				Frequently Asked Questions
			</h2>
			<div className="space-y-6">
				{questions.map(({ question, answer }, index) => (
					<div key={index} className="border-b border-gray-300">
						<button
							className="flex items-center justify-between w-full py-4 text-xl font-semibold text-left focus:outline-none"
							onClick={() => toggleFAQ(index)}
							aria-expanded={activeIndex === index}
							aria-controls={`faq-answer-${index}`}>
							{question}
							<FaAngleDown
								className={`w-6 h-6 transition-transform ${
									activeIndex === index ? 'rotate-180' : ''
								}`}
							/>
						</button>
						<div
							id={`faq-answer-${index}`}
							className={`overflow-hidden transition-all ${
								activeIndex === index ? 'max-h-40' : 'max-h-0'
							}`}
							aria-labelledby={`faq-question-${index}`}>
							<p className="px-4 py-2 text-lg text-gray-700">{answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
