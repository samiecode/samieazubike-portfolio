import Image from "next/image";
import MinNavBar from "@/components/MinNavBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const NavBar = () => {
	const [isToggle, setIsToggle] = useState(false)

	return (
		<>
			<div className="fixed top-0 h-[70px] grid grid-cols-12 z-50 bg-white border-b-[2px]  border-gray-100 w-full items-center">
				<div className="col-start-2 col-span-3 xs:max-lg:col-span-8 xs:max-lg:col-start-2">
					<a
						href="#"
						className="text-2xl font-bold no-underline relative">
						Samie Azubike
					</a>
				</div>

				<div className="col-start-6 xs:max-lg:hidden">
					<a
						href="#"
						className="no-underline px-4 py-1 font-bold hover:text-violet-800">
						About
					</a>
					<a
						href="#"
						className="no-underline px-4 py-1 font-bold hover:text-violet-800">
						Skills
					</a>
					<a
						href="#"
						className="no-underline px-4 py-1 font-bold hover:text-violet-800 ">
						Portfolio
					</a>
				</div>
				<div className="col-start-11 xs:max-lg:hidden">
					<div className="transform transition-all  ease-in-out duration-500 hover:scale-105">
						<a
							href="https://drive.google.com/file/d/1m-Q5CZCYU5Y0E4XAeajOC7UXhTUFpSHy/view?usp=sharing"
							className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-white px-12 py-2 font-bold hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-500 hover:text-white hover:border-violet-500">
							Resume
						</a>
					</div>
				</div>
				<div
					className="relative flex items-center justify-center  col-end-13 right-0 lg:hidden bg-gray-50 w-[50px] h-[50px] rounded-full"
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

			<MinNavBar isToggle={isToggle} />
		</>
	);
};

export default NavBar;
