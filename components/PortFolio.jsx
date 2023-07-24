import Project from "./Project";

const PortFolio = () => {
	const project = [
		{
			image: "bobfi-splash-screen.png",
			name: "Bobfi",
			stack: ["Core Java", "JavaFX", "MySQL"],
			des: "An application that manages your task, project, message client, and helps you communicate with your team.",
			link: "https://github.com/samieteq/bobfi",
		},
		{
			image: "splashscreen.jpg",
			name: "Chatfix Splash Screen",
			stack: ["Core Java", "JavaFX"],
			des: "Basic splash screen for desktop application",
			link: "https://github.com/samieteq/splash-screen",
		},
		{
			image: "samie-portfolio.svg",
			name: "Personal Porfolio",
			stack: ["React", "Next.Js", "TailWind CSS"],
			des: "My personal portfolio.",
			link: "https://github.com/samieteq/samieazubike-portfolio",
		},
	];
	return (
		<>
			<div id="portfolio" className="w-full max-w-7xl px-12">
				<div className="flex flex-col h-auto gap-10">
					<h1 className="text-black relative font-bold text-[32px] tracking-tighter self-start">
						Projects
					</h1>
					<div className="relative flex gap-5 flex-wrap justify-center">
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
