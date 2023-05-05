import Image from "next/image";
const Skill = ({color, img, name}) => {
	return (
		<>
			<div
				className={`h-[130px] w-[150px] bg-white drop-shadow-md rounded-md flex justify-center items-center transition transform hover:scale-110 flex-col hover:border-2 hover:border-[${color}] xs:max-md:h-[100px] xs:max-md:w-[100px]`}>
				<div
					className={`py-3 px-3 border-[${color}] border-2 rounded-full flex justify-center items-center flex-col xs:max-md:py-0 xs:max-md:px-0 xs:max-md:w-[40px] xs:max-md:h-[40px]`}>
					<Image
						className="xs:max-md:object-fit xs:max-md:w-[65%]"
						src={`/images/${img}`}
						height={40}
						width={40}
						alt="icon"
					/>
				</div>
				<label className="font-bold text-[15px] pt-2 text-center xs:max-md:text-[12px]">
					{name}
				</label>
			</div>
		</>
	);
};

export default Skill;
