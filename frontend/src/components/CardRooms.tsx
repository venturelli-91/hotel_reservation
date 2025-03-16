import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import Img1 from "../../public/assets/suite_esssencial.jpg";
import Img2 from "../../public/assets/suite_premium.jpg";
import Img3 from "../../public/assets/suite_grand_luxe.jpg";
import Img4 from "../../public/assets/Vector 5.png";
import Img5 from "../../public/assets/Rectangle 23.png";

const CardRooms = () => {
	return (
		<>
			<div className="flex justify-center items-center">
				<h1 className="text-4xl font-extrabold mt-28">Escolha sua suíte</h1>
			</div>
			<div className="flex justify-center items-center">
				<Image
					src={Img4}
					alt="Vector"
					className="flex justify-center items-center mt-7"
					style={{
						filter:
							"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
					}}
				/>
			</div>

			<div className="flex justify-center items-center gap-12 mt-16">
				<div className="relative group w-72">
					<div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110">
						<Image
							src={Img5}
							alt="Rectangle Border"
							className="w-full h-full object-contain"
							width={600}
							height={500}
							style={{
								filter:
									"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
							}}
						/>
					</div>
					<Card className="hover:scale-105 transition-all duration-100 dark:bg-transparent dark:border-none z-10 relative shadow-none border-none w-full h-full">
						<div className="h-44 w-full overflow-hidden">
							<Image
								src={Img1}
								alt="Suite Essencial"
								width={300}
								height={200}
								className="w-full h-full object-cover"
							/>
						</div>
						<span className="text-black font-sans font-bold text-lg mt-2">
							Suíte Essencial
						</span>
						<div className="pb-4">
							<h4 className="text-slate-500 font-sans font-extralight text-sm line-clamp-4">
								Conforto e praticidade para uma estadia agradável, com todas as
								comodidades essenciais.
							</h4>
						</div>
					</Card>
				</div>

				<div className="relative group w-72">
					<div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110">
						<Image
							src={Img5}
							alt="Rectangle Border"
							className="w-full h-full object-contain"
							width={600}
							height={500}
							style={{
								filter:
									"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
							}}
						/>
					</div>
					<Card className="hover:scale-105 transition-all duration-100 dark:bg-transparent dark:border-none z-10 relative shadow-none border-none w-full h-full">
						<div className="h-44 w-full overflow-hidden">
							<Image
								src={Img2}
								alt="Suite Premium"
								width={300}
								height={200}
								className="w-full h-full object-cover"
							/>
						</div>
						<span className="text-black font-sans font-bold text-lg mt-2">
							Suíte Premium
						</span>
						<div className="pb-4">
							<h4 className="text-slate-500 font-sans font-extralight text-sm line-clamp-4">
								Um toque de sofisticação e aconchego, combinando conforto e
								detalhes elegantes
							</h4>
						</div>
					</Card>
				</div>

				<div className="relative group w-72">
					<div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110">
						<Image
							src={Img5}
							alt="Rectangle Border"
							className="w-full h-full object-contain"
							width={600}
							height={500}
							style={{
								filter:
									"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
							}}
						/>
					</div>
					<Card className="hover:scale-105 transition-all duration-100 dark:bg-transparent dark:border-none z-10 relative shadow-none border-none w-full h-full">
						<div className="h-44 w-full overflow-hidden">
							<Image
								src={Img3}
								alt="Suite Executiva"
								width={300}
								height={200}
								className="w-full h-full object-cover"
							/>
						</div>
						<span className="text-black font-sans font-bold text-lg mt-2">
							Suíte Executiva
						</span>
						<div className="pb-4">
							<h4 className="text-slate-500 font-sans font-extralight text-sm line-clamp-4">
								Experiência exclusiva com requinte e comididades premium para o
								máximo de conforto.
							</h4>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default CardRooms;
