import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import background from "../../public/assets/banner_principal.jpg";
import logo from "../../public/assets/logo.png";

const HotelBanner = () => {
	return (
		<div className="relative h-[500px] w-full">
			<Image
				src={background}
				alt="Banner"
				fill
				className="object-cover"
			/>
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
				<Image
					src={logo}
					alt="Logo"
				/>
			</div>
			<Button>
				<span className="text-white">Faça sua reserva</span>
			</Button>
		</div>
	);
};

export default HotelBanner;
