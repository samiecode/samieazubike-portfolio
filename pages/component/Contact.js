export default function Contact() {
	return (
		<div className="py-[70px] xs:max-sm:w-[100%] xs:max-lg:flex md:max-lg:flex flex-col">
			<a
				href="#"
				className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-4 px-8 rounded font-bold text-center text-md xs:max-sm:w-[100%] xs:max-sm:px-2 hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-600">
				Contact Me
			</a>
			<a
				href="#"
				className="relative py-5 px-9 rounded font-bold text-xl text-violet-800 xs:max-sm:px-4 text-center mt-4">
				View Portfolio
				<i class="bx bx-link-external md:max-lg:absolute bottom-6 right-16 ml-2 transform transition-all hover:scale-110"></i>
			</a>
		</div>
	);
}
