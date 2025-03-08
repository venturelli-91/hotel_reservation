import Image from "next/image";
import Img1 from "../../public/assets/sobre_1.jpg";
import Img2 from "../../public/assets/sobre_2.jpg";
import Vector from "../../public/assets/Vector 5.png";
import React from "react";
import { Card } from "flowbite-react";
const About = () => {
	return (
		<>
			<Image
				src={Vector}
				alt="About"
				className="mt-28"
			/>
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-4xl font-extrabold my-10">
					Pousada Encanto da Serra
				</h1>
				<span className="text-2xl font-extrabold">
					&quot;Encanto, conforto e natureza: viva a magia da serra!&quot;
				</span>
			</div>
			<div className="flex flex-col items-start justify-start ml-48 my-20">
				<Card className="card1">
					<Image
						src={Img1}
						alt="About"
						className="rounded-lg"
					/>
					<span className="text-2xl font-extrabold text-black">
						Localizada no coração da serra, a Pousada Encanto da Serra é o
						destino ideal para quem busca tranquilidade, conforto e contato com
						a natureza. Cercada por paisagens deslumbrantes e um clima
						acolhedor, nossa pousada combina charme rústico com o aconchego que
						você merece.
					</span>
				</Card>
			</div>

			<div className="flex flex-col items-end justify-end mr-48 w-auto">
				<Card className="card2">
					<span className="text-2xl font-extrabold text-black grid grid-cols-2">
						Aqui, cada detalhe foi pensado para proporcionar uma experiência
						única. Oferecemos suítes confortáveis e bem equipadas, um café da
						manhã caseiro repleto de sabores regionais e uma área externa
						perfeita para momentos de relaxamento. Desfrute de trilhas
						ecológicas, redes para descanso, piscina climatizada e um ambiente
						que convida à desconexão da rotina.
					</span>
					<Image
						src={Img2}
						alt="About"
					/>
				</Card>
			</div>
		</>
	);
};

export default About;
