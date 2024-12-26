import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleOpen = index => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="max-w-[1280px] mx-auto p-8 mt-12">
			<h2 className="text-3xl font-bold text-center text-[#09080F] mb-8">
				Frequently Asked Questions
			</h2>
			<div className="space-y-6">
				<div className="border-b border-[#E5E5E5]">
					<div className="flex justify-between items-center py-4">
						<h3 className="text-xl font-semibold">How do I create an assignment?</h3>
						<button
							className="text-primary focus:outline-none"
							onClick={() => toggleOpen(0)}>
							<FaAngleDown
								className={`w-6 h-6 transform transition-all ${
									openIndex === 0 ? 'rotate-180' : ''
								}`}
							/>
						</button>
					</div>
					{openIndex === 0 && (
						<p className="text-[#09080F99] text-[20px]">
							To create an assignment, simply log in, go to the 'Create Assignment'
							page, and fill out the required fields.
						</p>
					)}
				</div>

				<div className="border-b border-[#E5E5E5]">
					<div className="flex justify-between items-center py-4">
						<h3 className="text-xl font-semibold">Can I grade my own assignments?</h3>
						<button
							className="text-primary focus:outline-none"
							onClick={() => toggleOpen(1)}>
							<FaAngleDown
								className={`w-6 h-6 transform transition-all ${
									openIndex === 1 ? 'rotate-180' : ''
								}`}
							/>
						</button>
					</div>
					{openIndex === 1 && (
						<p className="text-[#09080F99] text-[20px]">
							No, you can only grade assignments submitted by others. You can check
							your own results on the 'My attempted assignments' page.
						</p>
					)}
				</div>

				<div className="border-b border-[#E5E5E5]">
					<div className="flex justify-between items-center py-4">
						<h3 className="text-xl font-semibold">How do I submit my assignment?</h3>
						<button
							className="text-primary focus:outline-none"
							onClick={() => toggleOpen(2)}>
							<FaAngleDown
								className={`w-6 h-6 transform transition-all ${
									openIndex === 2 ? 'rotate-180' : ''
								}`}
							/>
						</button>
					</div>
					{openIndex === 2 && (
						<p className="text-[#09080F99] text-[20px]">
							To submit your assignment, go to the assignment's details page and click
							the 'Take Assignment' button. You'll then be able to submit your work
							via Google Docs link and a brief note.
						</p>
					)}
				</div>

				<div className="border-b border-[#E5E5E5]">
					<div className="flex justify-between items-center py-4">
						<h3 className="text-xl font-semibold">
							Is my data secure on this platform?
						</h3>
						<button
							className="text-primary focus:outline-none"
							onClick={() => toggleOpen(3)}>
							<FaAngleDown
								className={`w-6 h-6 transform transition-all ${
									openIndex === 3 ? 'rotate-180' : ''
								}`}
							/>
						</button>
					</div>
					{openIndex === 3 && (
						<p className="text-[#09080F99] text-[20px]">
							Yes, we use Firebase authentication and store data securely. Your
							assignments and grades are kept private and safe.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
