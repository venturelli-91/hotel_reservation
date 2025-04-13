import React from "react";
import Image from "next/image";
import Img1 from "../../public/assets/marco/Tiro médio da mulher do smiley que levanta _ Foto Grátis.png";
import Img3 from "../../public/assets/marco/Group 1.png";
import Vector from "../../public/assets/marco/Vector 5.png";
import { Card } from "flowbite-react";

const Comments = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-16 w-full">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-4xl font-extrabold my-10">
						Depoimentos de nossos clientes
					</h1>
					<Image
						src={Vector}
						alt="About"
						width={100}
						height={100}
						style={{
							filter:
								"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
						}}
					/>
				</div>
			</div>
			<div className="flex mt-24 gap-10 justify-center items-center flex-row">
				<Card
					className="w-1/3 rounded-full"
					style={{ backgroundColor: "purple" }}>
					<div className="flex flex-row items-center justify-center">
						<Image
							src={Img1}
							alt="Imagem 1"
						/>
						<div className="flex flex-col p-5">
							<span className="text-white font-sans text-sm mb-2">
								&quot;Uma experiência incrível! O lugar é super aconchegante,
								perfeito para relaxar e curtir a natureza. O café da manhã
								caseiro é um espetáculo à parte! Com certeza voltarei.&quot;
							</span>
							<span className="text-white font-sans font-bold text-sm">
								Mariana R.
							</span>
						</div>
					</div>
				</Card>
				<Card
					className="w-1/3 rounded-full"
					style={{ backgroundColor: "purple" }}>
					<div className="flex flex-row items-center justify-center">
						<Image
							src={Img3}
							alt="Group 1"
						/>
						<div className="flex flex-col p-5">
							<span className="text-white font-sans text-sm mb-2">
								&quot; A pousada é um verdadeiro refúgio! Quartos confortáveis,
								atendimento impecável e uma vista maravilhosa. Passamos dias
								inesquecíveis aqui!&quot;
							</span>
							<span className="text-white font-sans font-bold text-sm">
								Lucas M.
							</span>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
};

export default Comments;
