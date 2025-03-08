import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import Img1 from "../../public/assets/suite_esssencial.jpg";
import Img2 from "../../public/assets/suite_premium.jpg";
import Img3 from "../../public/assets/suite_grand_luxe.jpg";

const CardRooms = () => {
	return (
		<>
			<div className="flex justify-center items-center">
				<h1 className="text-4xl font-extrabold mt-28">Escolha sua suíte</h1>
			</div>

			<div className="flex justify-center items-center gap-4 mt-28">
				<Card className="hover:scale-105 transition-all duration-100">
					<Image
						src={Img1}
						alt="Suite Essencial"
					/>
					<span>Suíte Essencial</span>
					<h3>R$ 100,00</h3>
				</Card>

				<Card className="hover:scale-105 transition-all duration-100">
					<Image
						src={Img2}
						alt="Suite Premium"
					/>
					<span>Suíte Premium</span>
					<h3>R$ 100,00</h3>
				</Card>

				<Card className="hover:scale-105 transition-all duration-100">
					<Image
						src={Img3}
						alt="Suite Executiva"
					/>
					<span className="text-white font-sans font-bold text-2xl">
						Suíte Executiva
					</span>
					<h3 className="text-white font-sans font-bold text-2xl">R$ 100,00</h3>
				</Card>
			</div>
		</>
	);
};

export default CardRooms;
