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
			des: "This is a basic Spring Boot registration application with signup, signin, and dashboard functionalities.",
			link: "https://github.com/samieteq/springboot-registration-system",
			visit: true,
			url: "https://springbootregistrationsystem.netlify.app",
		},
		{
			image: "samieazubike.me.png",
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
		
	];
	return (
		<>
			<div id="portfolio" className="w-full max-w-7xl px-10 xs:max-sm:px-5">
				<div className="flex flex-col h-auto gap-10">
					<h1 className="text-black relative font-bold text-[32px] tracking-tighter self-start">
						Projects
					</h1>
					<div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
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
