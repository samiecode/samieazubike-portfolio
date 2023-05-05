import {Link, animateScroll as scroll} from "react-scroll";
const Contact = () => {
	return (
		<div className="py-[70px] xs:max-sm:w-[100%] xs:max-lg:flex md:max-lg:flex flex-col">
			<a
				href="#"
				className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-4 px-8 rounded font-bold text-center text-md xs:max-sm:w-[100%] xs:max-sm:px-2 hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-600">
				Hire Me
			</a>
			<Link
				activeClass="active"
				to="portfolio"
				smooth={true}
				offset={-70}
				duration={500}
				className="relative py-5 px-9 rounded font-bold text-xl text-violet-800 xs:max-sm:px-4 text-center mt-4">
				View Portfolio
				<i className="bx bx-link-external bottom-6 right-16 ml-2 transform transition-all hover:scale-110"></i>
			</Link>
		</div>
	);
};

export default Contact;
