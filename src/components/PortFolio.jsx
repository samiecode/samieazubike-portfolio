import Project from "./Project";

const PortFolio = () => {
	const project = [
		{
			image: "signin.png",
			name: "Registration System",
			stack: [
				"Core Java",
				"TypeScript",
				"Spring Boot",
				"React",
				"NextJS",
				"MySQL",
				"Tailwind CSS",
			],
			des: "This is a basic Spring Boot registration application with signup, signin, and dashboard functionalities. It also handles data validation. Use can read more in my github repo.",
			link: "https://github.com/samieteq/springboot-registration-system",
			visit: true,
			url: "https://springbootregistrationsystem.netlify.app",
		},
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
			image: "screenshot-rocks (3).png",
			name: "Personal Porfolio",
			stack: ["React", "Next.Js", "TailWind CSS"],
			des: "My personal portfolio.",
			link: "https://github.com/samieteq/samieazubike-portfolio",
			visit: true,
			url: "https://samieazubike.vercel.app",
		},
		{
			image: "Product-Preview-Card.png",
			name: "Product Preview Card",
			stack: ["HTML", "CSS"],
			des: "This is a simple product preview card with no functionalities.",
			link: "https://github.com/samieteq/Product-preview-card-component",
			visit: true,
			url: "https://samieteq-product-preview-card.netlify.app/",
		},
		{
			image: "responsive-order-summary-card-project.jpg",
			name: "Summary Card",
			stack: ["HTML", "SCSS"],
			des: "This is a very simple responsive summary card with no functionalities.",
			link: "https://github.com/samieteq/responsive-order-summary-card-project",
			visit: true,
			url: "https://samieteq-resp-order-summary-card.netlify.app/",
		},
		{
			image: "tip-calculator.jpg",
			name: "Tip Calculator",
			stack: ["HTML", "SCSS", "JavaScript"],
			des: "This is a responsive calculator for tips.",
			link: "https://github.com/samieteq/tip-calculator",
			visit: true,
			url: "https://samieteq-tip-calculator.netlify.app/",
		},
	];
	return (
		<>
			<div id="portfolio" className="w-full max-w-7xl px-10 xs:max-sm:px-5">
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
									visit={item.visit}
									url={item.url}
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
