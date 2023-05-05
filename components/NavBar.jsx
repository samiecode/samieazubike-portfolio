import Image from "next/image";
import MinNavBar from "@/components/MinNavBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link, animateScroll as scroll} from 'react-scroll'
import { useEffect } from "react";

const NavBar = () => {
	const [activeLink, setActiveLink] = useState({
		about: false,
		skills: false,
		projects: false
	})

	const handleSetActiveLink = (name, value) => {
		setActiveLink((pre) => ({
			...pre,
			[name]: value,
		}));
	}
	const [isToggle, setIsToggle] = useState(false)

	useEffect(() => {

		const handleScroll = () => {
			//scroll event handler code
			if (window.pageYOffset > 408 && window.pageYOffset <= 857) {
				handleSetActiveLink("about", true)
			}
			else {
				handleSetActiveLink("about", false)
			}

			if (window.pageYOffset > 857 && window.pageYOffset <= 1584) {
				handleSetActiveLink("projects", true);
			} else {
				handleSetActiveLink("projects", false);
			}

			if (window.pageYOffset > 1584) {
				handleSetActiveLink("skills", true);
			} else {
				handleSetActiveLink("skills", false);
			}
			
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};

	},[]);

	return (
		<>
			<div className="fixed top-0 h-[70px] grid grid-cols-12 z-50 bg-white border-b-[2px]  border-gray-100 w-full items-center">
				<div className="col-start-2 col-span-3 xs:max-lg:col-span-8 xs:max-lg:col-start-2">
					<Link
						activeClass="active"
						to="home"
						smooth={true}
						offset={-70}
						duration={500}
						className="text-2xl font-bold no-underline relative cursor-pointer">
						Samie Azubike
					</Link>
				</div>

				<div className="col-start-6  col-span-4 xs:max-lg:hidden">
					<Link
						activeClass="active"
						to="about"
						smooth={true}
						offset={-70}
						duration={500}
						className={`no-underline px-4 py-1 font-bold hover:text-violet-800 cursor-pointer transition duration-500 ease-in-out ${
							activeLink.about ? "text-violet-600" : ""
						}`}>
						About
					</Link>
					<Link
						activeClass="active"
						to="portfolio"
						smooth={true}
						offset={-70}
						duration={500}
						className={`no-underline px-4 py-1 font-bold hover:text-violet-800 cursor-pointer transition duration-500 ease-in-out ${
							activeLink.projects ? "text-violet-600" : ""
						}`}>
						My Projects
					</Link>
					<Link
						activeClass="active"
						to="skills"
						smooth={true}
						offset={-70}
						duration={500}
						className={`no-underline px-4 py-1 font-bold hover:text-violet-800 cursor-pointer transition duration-500 ease-in-out ${
							activeLink.skills ? "text-violet-600" : ""
						}`}>
						Skills
					</Link>
				</div>
				<div className="col-start-11 xs:max-lg:hidden">
					<div className="transform transition-all  ease-in-out duration-500 hover:scale-105">
						<a
							href="https://drive.google.com/file/d/1wAkS7_SJR28XunCMzcOP6kCPdPY7CtQx/view?usp=sharing"
							className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-white px-6 py-3 font-bold hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-500 hover:text-white hover:border-violet-500">
							Resume
						</a>
					</div>
				</div>
				<div
					className="relative flex items-center justify-center  col-end-13 right-0 lg:hidden bg-gray-50 w-[50px] h-[50px] rounded-full xs:max-md:col-start-12 xs:max-md:-left-7"
					onClick={(e) => {
						setIsToggle(!isToggle);
						console.log(e);
					}}>
					<MenuIcon
						className={`absolute text-slate-900 text-4xl transition-all duration-500 ease-in-out ${
							isToggle ? "opacity-0" : "rotate-180 opacity-100"
						}`}
					/>
					<CloseIcon
						className={`absolute text-slate-900 text-4xl transition-all duration-500 ease-in-out ${
							isToggle ? "-rotate-180 opacity-100" : "opacity-0"
						}`}
					/>
				</div>
			</div>

			<MinNavBar isToggle={isToggle} isActive={activeLink} />
		</>
	);
};

export default NavBar;
