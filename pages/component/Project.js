import Link from 'next/link'

export default function Project ({link, image}){
	return (
		<>
			<div className="w-[340px] rounded drop-shadow-md h-auto ">
				<div className="w-full h-[180px] bg-white px-2 py-2">
					<img
						className="w-full h-full"
						src={`/images/${image}.png`}
						alt="project image"
					/>
				</div>
				<div className="bg-white px-6 py-6 flex flex-col gap-3">
					<h1 className="text-center">
						A modern UI/UX restaurant website that can be utilized
						for commercial purposes.
					</h1>
					<div>
						<h2 className="text-center font-bold text-md">
							Stack:
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