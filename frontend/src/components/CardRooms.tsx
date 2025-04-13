import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";
import Img1 from "../../public/assets/marco/suite_esssencial.jpg";
import Img2 from "../../public/assets/marco/suite_premium.jpg";
import Img3 from "../../public/assets/marco/suite_grand_luxe.jpg";
import Img4 from "../../public/assets/marco/Vector 5.png";
import Img5 from "../../public/assets/marco/Rectangle 23.png";

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
					<Link href="/rooms/essencial">
						<div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity z-20 duration-300 scale-110 cursor-pointer">
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
					</Link>
					<Link href="/rooms/essencial">
						<Card className="hover:scale-105 transition-all duration-100 dark:bg-transparent dark:border-none relative shadow-none border-none w-full h-full cursor-pointer">
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
									Conforto e praticidade para uma estadia agradável, com todas
									as comodidades essenciais.
								</h4>
							</div>
						</Card>
					</Link>
				</div>

				<div className="relative group w-72">
					<Link href="/rooms/premium">
						<div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity z-20 duration-300 scale-110 cursor-pointer">
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
					</Link>
					<Link href="/rooms/premium">
						<Card className="hover:scale-105 transition-all duration-100 dark:bg-transparent dark:border-none relative shadow-none border-none w-full h-full cursor-pointer">
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
					</Link>
				</div>

				<div className="relative group w-72">
					<Link href="/rooms/executiva">
						<div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity z-20 duration-300 scale-110 cursor-pointer">
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
					</Link>
					<Link href="/rooms/executiva">
						<Card className="hover:scale-105 transition-all duration-100 dark:bg-transparent dark:border-none relative shadow-none border-none w-full h-full cursor-pointer">
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
									Experiência exclusiva com requinte e comididades premium para
									o máximo de conforto.
								</h4>
							</div>
						</Card>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CardRooms;
