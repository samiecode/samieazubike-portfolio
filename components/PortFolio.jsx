import Project from "./Project";

const PortFolio = () => {
	const project = [
		{
			image: "bobfi-splash-screen.png",
			name: "Bobfi",
			stack: ["Core Java", "JavaFX", "MySQL"],
			des: "An application that manages your task, project, message client, and helps you communicate with your team.",
			link: "https://github.com/samieteq/bobfi",
			bgcolor: "#f0f9ff",
		},
		{
			image: "splashscreen.jpg",
			name: "Chatfix Splash Screen",
			stack: ["Core Java", "JavaFX"],
			des: "Basic splash screen for desktop application",
			link: "https://github.com/samieteq/splash-screen",
			bgcolor: "#f5f3ff",
		},
		{
			image: "samie-portfolio.svg",
			name: "Personal Porfolio",
			stack: ["React", "Next.Js", "TailWind CSS"],
			des: "My personal portfolio.",
			link: "https://github.com/samieteq/samieazubike-portfolio",
			bgcolor: "#f1f5f9",
		},
	];
	return (
		<>
			<div id="portfolio" className="grid grid-cols-12 ">
				<div className="col-start-2 col-span-11 my-[100px] flex flex-col h-auto gap-10">
					<h1 className="text-black relative before:-bottom-1 font-bold text-6xl border-b-[6px] border-violet-800 w-fit xs:max-xm:text-[40px]">
						Portfolio
					</h1>
					<div className="relative -left-10 flex flex-row gap-5 flex-wrap justify-center">
						{project.map((item, key) => (
							<>
								<Project
									key={key}
									link={item.link}
									image={item.image}
									name={item.name}
									stack={item.stack}
									des={item.des}
									bgcolor={item.bgcolor}
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PortFolio;
