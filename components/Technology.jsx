import Image from "next/image";
import Skill from "./Skill";
export default function Technology() {
	const skills = [
		{
			color: "#7fa4ec",
			img: "java.png",
			name: "JAVA",
		},
		{
			color: "#7fa4ec",
			img: "javafx.png",
			name: "JAVAFX",
		},
		{
			color: "#8bc24a",
			img: "spring.svg",
			name: "SPRINGBOOT",
		},
		{
			color: "#ffd600",
			img: "javascript-39395.png",
			name: "JAVASCRIPT",
		},
		{
			color: "#00d8ff",
			img: "reacct.png",
			name: "REACT JS",
		},
		{
			color: "#ec5c28",
			img: "html-5.png",
			name: "HTML",
		},
		{
			color: "#2b78c8",
			img: "css-3.png",
			name: "CSS",
		},
		{
			color: "#07b6d5",
			img: "tailwind-css-icon.svg",
			name: "TAILWIND CSS",
		},
		{
			color: "black",
			img: "github.png",
			name: "GITHUB",
		},
		{
			color: "#1f90ff",
			img: "MySQL.png",
			name: "MYQSL",
		},
		{
			color: "#ec5c28",
			img: "postman.svg",
			name: "POSTMAN",
		},
		{
			color: "#2597ef",
			img: "docker.png",
			name: "DOCKER",
		},
	];

	return (
		<>
			<div id="skills" className="grid grid-cols-12">
				<div className="col-start-2 col-span-11 my-[100px] flex flex-col px-4 py-4 h-auto xs:max-md:col-span-11 xs:max-md:col-start-2 xs:max-md:col-span-11">
					<h1 className="text-black relative before:-bottom-1 font-bold text-6xl border-b-[6px] border-violet-800 w-fit xs:max-xm:text-[40px]">
						Technologies
					</h1>
					<p className="text-[22px] mt-5 xs:max-xm:text-[16px]">
						Here are some of the design software packages,
						programming languages and frameworks that I use
						frequently. I&apos;m always looking to learn new things
						everyday!
					</p>
					<div className="mt-10 flex flex-wrap gap-5 xs:max-md:justify-center">
						{skills.map((item, key) => (
							<Skill key={key} color={ item.color} img={item.img} name={item.name} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
