import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cards = ({ assign }) => {
	const { title, marks, difficulty, photo, description } = assign;
	return (
		<div className="mx-auto w-full rounded-2xl shadow-lg">
			<section
				style={{
					backgroundImage: `linear-gradient(hsla(0, 0%, 0%, 0.45), hsla(0, 0%, 0%, 0.45)), url(${photo})`,
				}}
				className="relative rounded-t-2xl p-5 h-60 bg-cover">
				<header className="flex justify-between items-center gap-4 font-bold">
					<div
						className={`badge badge-outline uppercase tracking-widest cursor-default ${
							difficulty === 'easy' ? 'badge-accent' : ''
						} ${difficulty === 'medium' ? 'badge-warning' : ''} ${
							difficulty === 'hard' ? 'badge-error' : ''
						}`}>
						{difficulty}
					</div>
					<div className="flex gap-3">
						<div className="p-3 bg-base-100 rounded-full text-lg cursor-pointer">
							<MdUpdate />
						</div>
						<div className="p-3 bg-base-100 rounded-full text-lg cursor-pointer">
							<RiDeleteBin6Line />
						</div>
					</div>
				</header>
				<span className="absolute bottom-4 right-4 border-2 bg-opacity-10 bg-info border-info text-info py-2 px-4 rounded-full cursor-default font-semibold">
					Marks: {marks}
				</span>
			</section>

			<footer className="flex flex-col justify-start items-start flex-nowrap p-3 gap-4 font-bold">
				<div>
					<p className="text-ellipsis overflow-hidden max-w-[32ch] lg:max-w-[30ch] xl:max-w-[42ch] text-nowrap">
						{title}
					</p>
				</div>

				<Link
					to={'/assignment-details'}
					className="cursor-pointer py-2 px-5 rounded-full bg-accent text-white font-semibold">
					View assignment
				</Link>
			</footer>
		</div>
	);
};

export default Cards;
