const About = () => {
	return (
		<>
			<div id="about" className="grid grid-cols-12">
				<div className="col-start-2 col-span-10 mt-[200px] flex flex-col px-4 py-4 h-auto">
					<h1 className="text-black relative before:-bottom-1 font-bold text-6xl border-b-[6px] border-violet-800 w-fit xs:max-xm:text-[40px]">
						About
					</h1>
					<p className="text-[20px] mt-3">
						I am a life long learning, determined and passion-driven
						Software Engineer, building Tech Communities around Tech
						Products and increasing engagement through user adoption
						by working closely with the Marketing, Product, and
						Engineering Team to come up with a clear-cut strategy to
						level-up user onboarding. I have special interest in
						back-end program development using Java and Javascript.
						Experienced in designing interfaces,developing, testing
						and debugging codes. At the moment i am building
						projects with Springboot and React
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
