import Image from "next/image";
import Img1 from "../../public/assets/sobre_1.jpg";
import Img2 from "../../public/assets/sobre_2.jpg";
import Vector from "../../public/assets/Vector 5.png";
import React from "react";

const About = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-16 w-full">
				<Image
					src={Vector}
					alt="About"
					style={{
						filter:
							"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
					}}
				/>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-4xl font-extrabold my-10">
					Pousada Encanto da Serra
				</h1>
				<span className="text-2xl font-extralight text-slate-500">
					&quot;Encanto, conforto e natureza: viva a magia da serra!&quot;
				</span>
			</div>
			<div className="flex flex-col items-center justify-center ml-0 my-20 w-full">
				<div className="w-4/5 max-w-6xl">
					<div className="grid grid-cols-2 gap-8">
						<div className="flex items-center justify-center pr-8">
							<Image
								src={Img1}
								alt="About"
								className="rounded-3xl"
								width={500}
								height={350}
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div className="flex flex-col pl-8">
							<div>
								<Image
									src={Vector}
									alt="About"
									className="rounded-3xl"
									style={{
										filter:
											"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
									}}
								/>
								<h1 className="text-4xl font-extrabold text-black mt-14">
									Coração da Serra
								</h1>
								<div className="mt-10">
									<span className="text-xl font-extralight text-slate-500">
										Localizada no coração da serra, a Pousada Encanto da Serra é
										o destino ideal para quem busca tranquilidade, conforto e
										contato com a natureza. Cercada por paisagens deslumbrantes
										e um clima acolhedor, nossa pousada combina charme rústico
										com o aconchego que você merece.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center ml-0 my-10 w-full">
				<div className="w-4/5 max-w-6xl">
					<div className="grid grid-cols-2 gap-8">
						<div className="flex flex-col pr-8">
							<div>
								<Image
									src={Vector}
									alt="About"
									className="rounded-lg"
									style={{
										filter:
											"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
									}}
								/>
								<h1 className="text-4xl font-extrabold text-black mt-14">
									Oferecemos conforto e qualidade
								</h1>
								<div className="mt-10">
									<span className="text-xl font-extralight text-slate-500">
										Aqui, cada detalhe foi pensado para proporcionar uma
										experiência única. Oferecemos suítes confortáveis e bem
										equipadas, um café da manhã caseiro repleto de sabores
										regionais e uma área externa perfeita para momentos de
										relaxamento. Desfrute de trilhas ecológicas, redes para
										descanso, piscina climatizada e um ambiente que convida à
										desconexão da rotina.
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center pl-8">
							<Image
								src={Img2}
								alt="About"
								className="rounded-3xl"
								width={500}
								height={350}
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
