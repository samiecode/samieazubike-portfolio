import Image from "next/image";
const Skill = () => {
	const skills = [
		{
			color: "#7fa4ec",
			img: "java.png",
			name: "JAVA",
			border_color: "border-[#7fa4ec]",
			hover_border: "hover:border-[#7fa4ec]",
		},
		{
			color: "#8bc24a",
			img: "https://raw.githubusercontent.com/devicons/devicon/blob/master/icons/spring/spring-original.svg",
			name: "SPRINGBOOT",
			border_color: "border-[#8bc24a]",
			hover_border: "hover:border-[#8bc24a]",
		},
		{
			color: "#ffd600",
			img: "javascript-39395.png",
			name: "JAVASCRIPT",
			border_color: "border-[#ffd600]",
			hover_border: "hover:border-[#ffd600]",
		},
		{
			color: "#00d8ff",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
			name: "REACT JS",
			border_color: "border-[#00d8ff]",
			hover_border: "hover:border-[#00d8ff]",
		},
		{
			color: "black",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			name: "NEXT JS",
			border_color: "border-black",
			hover_border: "hover:border-black",
		},
		{
			color: "#ec5c28",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
			name: "HTML",
			border_color: "border-[#ec5c28]",
			hover_border: "hover:border-[#ec5c28]",
		},
		{
			color: "#2b78c8",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
			name: "CSS",
			border_color: "border-[#2b78c8]",
			hover_border: "hover:border-[#2b78c8]",
		},
		{
			color: "#07b6d5",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
			name: "TAILWIND CSS",
			border_color: "border-[#07b6d5]",
			hover_border: "hover:border-[#07b6d5]",
		},{
			color: "#f34f29",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
			name: "GIT",
			border_color: "border-[#f34f29]",
			hover_border: "hover:border-[#f34f29]"
		},
		{
			color: "black",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
			name: "GITHUB",
			border_color: "border-black",
			hover_border: "hover:border-black",
		},
		{
			color: "#336691",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
			name: "POSTGRESQL",
			border_color: "border-[#336691]",
			hover_border: "hover:border-[#336691]",
		},
		{
			color: "#1f90ff",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
			name: "MYQSL",
			border_color: "border-[#1f90ff]",
			hover_border: "hover:border-[#1f90ff]",
		},
		{
			color: "#ec5c28",
			img: "postman.svg",
			name: "POSTMAN",
			border_color: "border-[#ec5c28]",
			hover_border: "hover:border-[#ec5c28]",
		},
		{
			color: "#2597ef",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
			name: "DOCKER",
			border_color: "border-[#2597ef]",
			hover_border: "hover:border-[#2597ef]",
		},
	];

	return (
		<>
			{skills.map((item, key) => (
				<div
					key={key}
					className={`h-[130px] w-[150px] bg-white drop-shadow-md rounded-md flex justify-center items-center transition transform hover:scale-110 flex-col hover:border ${item.hover_border} xs:max-md:h-[80px] xs:max-md:w-[80px]`}
				>
					<div
						className={`py-3 px-3 ${item.border_color} border rounded-full flex justify-center items-center flex-col xs:max-md:py-0 xs:max-md:px-0 xs:max-md:w-[40px] xs:max-md:h-[40px]`}
					>
						<Image
							className="xs:max-md:object-fit xs:max-md:w-[65%]"
							src={`${item.img.startsWith("https") ? `${item.img}` : `\images\${item.img}`}`}
							height={40}
							width={40}
							alt="icon"
						/>
					</div>
					<label className="font-bold text-[15px] pt-2 text-center xs:max-md:text-[9px]">
						{item.name}
					</label>
				</div>
			))}
		</>
	);

};

export default Skill;
