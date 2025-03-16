import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import background from "../../public/assets/banner_principal.jpg";
import logo from "../../public/assets/logo.png";

const HotelBanner = () => {
	return (
		<div className="w-screen h-[500px] relative mt-0 shadow-md shadow-black overflow-hidden">
			<Image
				src={background}
				alt="Banner"
				fill
				className="object-cover object-top"
				priority
			/>
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pb-32">
				<Image
					src={logo}
					alt="Logo"
				/>
			</div>
			<div className="flex justify-center items-center pt-80 hover:scale-105 transition-all duration-100">
				<Button
					style={{ backgroundColor: "purple" }}
					className="rounded-full w-1/4">
					<span className="text-white font-sans font-bold text-2xl">
						Faça sua reserva
					</span>
				</Button>
			</div>
		</div>
	);
};

export default HotelBanner;
