import Link from 'next/link'

const Project =({link, image, name}) =>{
	return (
		<>
			<div className="w-[350px] rounded drop-shadow-md h-auto ">
				<div className="w-full h-[180px] bg-white px-2 py-2">
					<img
						className="w-full h-full"
						src={`/images/${image}.png`}
						alt="project image"
					/>
				</div>
				<div className="bg-white px-6 py-6 flex flex-col gap-3">
					<h1 className="flex items-center justify-center relative text-center font-bold text-3xl text-violet-900">
						{name}
					</h1>
					<hr className="w-[20%] border-2 border-fuchsia-500 h-px bg-violet-800 relative top-22 left-[120px]" />
					<h1 className="text-center text-[14px]">
						An application that manages your task, project, message,
						client, and helps you communicate with your team.
					</h1>
					<div>
						<h2 className="text-center font-bold text-md text-violet-900">
							Stack
						</h2>
						<ul className="flex justify-around font-semibold text-violet-900 py-2">
							<li>Core Java</li>
							<li>JavaFx</li>
							<li>MySQL</li>
						</ul>
					</div>
					<Link
						href={link}
						className="bg-gradient-to-r from-violet-500 to-fuchsia-500 self-start text-white font-semibold rounded-full px-4 py-2 text-[14px]">
						Source
					</Link>
				</div>
			</div>
		</>
	);
};

export default Project

