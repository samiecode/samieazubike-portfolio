import Image from "next/image";
import Skill from "./Skill";
export default function Technology() {

	return (
		<>
			<div id="skills" className="px-12 w-full max-w-7xl xs:max-sm:px-5">
				<div className="flex flex-col h-auto gap-5">
					<h1 className="text-black font-bold text-[32px] tracking-tighter">
						Technologies
					</h1>
					<p className="text-[22px] xs:max-xm:text-[16px]">
						Here are some of the design software packages,
						programming languages and frameworks that I use
						frequently. I&apos;m always looking to learn new things
						everyday!
					</p>
					<div className="flex flex-wrap gap-4 xs:max-md:justify-center">
						<Skill/>
						
						{/* {skills.map((item, key) => (
							<Skill key={key} color={ item.color} img={item.img} name={item.name} />
						))} */}
					</div>
				</div>
			</div>
		</>
	);
}
