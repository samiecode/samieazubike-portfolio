import Image from "next/image";
import Skill from "./Skill";
export default function Technology() {
	return (
		<>
			<div id="skills" className="grid grid-cols-12">
				<div className="col-start-2 col-span-11 my-[100px] flex flex-col px-4 py-4 h-auto xs:max-md:col-span-11 xs:max-md:col-start-2 xs:max-md:col-span-11">
					<h1 className="z-60 text-black relative before:-bottom-1 font-bold text-6xl before:z-10 before:content-[''] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:absolute before:w-[170px] before:h-[7px] before:bottom-0 before:left-0 xs:max-sm:text-[44px] xs:max-sm:text-[40px] xs:max-sm:before:w-[275px] xs:max-sm:before:h-[5px] before:z-10">
						Technologies
					</h1>
					<p className="text-[22px] mt-5 xs:max-xm:text-[16px]">
						Here are some of the design software packages,
						programming languages and frameworks that I use
						frequently. I&apos;m always looking to learn new things
						everyday!
					</p>
					<div className="mt-10 flex flex-wrap gap-5 xs:max-md:justify-center">
						<Skill color="#7fa4ec" img="java.png" name="JAVA" />
						<Skill
							color="#8bc24a"
							img="spring.svg"
							name="SPRINGBOOT"
						/>
						<Skill
							color="#ffd600"
							img="javascript-39395.png"
							name="JAVASCRIPT"
						/>
						<Skill
							color="#00d8ff"
							img="reacct.png"
							name="REACT JS"
						/>
						<Skill color="#ec5c28" img="html-5.png" name="HTML" />
						<Skill color="#2b78c8" img="css-3.png" name="CSS" />
						<Skill
							color="#07b6d5"
							img="tailwind-css-icon.svg"
							name="TAILWIND CSS"
						/>
						<Skill color="black" img="github.png" name="GITHUB" />
						<Skill color="#1f90ff" img="MySQL.png" name="MYQSL" />
						<Skill
							color="#ec5c28"
							img="postman.svg"
							name="POSTMAN"
						/>
						<Skill color="#2597ef" img="docker.png" name="DOCKER" />
					</div>
				</div>
			</div>
		</>
	);
};
