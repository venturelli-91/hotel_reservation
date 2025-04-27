import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaCalendarAlt,
	FaUsers,
	FaWifi,
	FaTv,
	FaSnowflake,
	FaCoffee,
	FaBath,
	FaBed,
	FaCocktail,
	FaConciergeBell,
	FaHome,
} from "react-icons/fa";
import Head from "next/head";
import ImgPremium1 from "../../../public/assets/abril/Villa.jpeg";
import ImgPremium2 from "../../../public/assets/abril/Casa_praia.jpeg";
import ImgPremium3 from "../../../public/assets/abril/outdoor_kitchen.jpeg";
import ImgEssencial from "../../../public/assets/abril/cafe_manha.jpeg";
import ImgExecutiva from "../../../public/assets/abril/bedroom1.jpeg";
import Comments from "@/components/Comments";
import ImgStars from "../../../public/assets/abril/Group 34.png";
import ImgVector from "../../../public/assets/abril/Vector 8.png";
import ImgRectangle from "../../../public/assets/abril/Rectangle 49.png";
import Footer from "@/components/Footer";
import { Card } from "flowbite-react";

const SuitePremium = () => {
	const [checkIn, setCheckIn] = useState("");
	const [checkOut, setCheckOut] = useState("");
	const [guests, setGuests] = useState(2);
	const [savedRoom, setSavedRoom] = useState(false);

	const handleSaveRoom = () => {
		setSavedRoom(!savedRoom);
	};

	const handleReservation = (e: React.FormEvent) => {
		e.preventDefault();
		window.location.href = "/success";
	};

	return (
		<>
			<Head>
				<title>Suíte Premium | Hotel Paradise</title>
			</Head>
			<div className="relative">
				<Image
					src={ImgRectangle}
					alt="Rectangle"
					width={2000}
					height={2000}
				/>
				<div className="absolute top-1/2 left-16 transform -translate-y-1/2">
					<Link
						href="/"
						className="text-white font-bold text-2xl hover:underline flex items-center">
						<FaHome className="mr-2" /> HomePage
					</Link>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="text-start mb-12">
					<Image
						src={ImgStars}
						alt="Stars"
						width={100}
						height={100}
					/>
					<h1 className="text-4xl font-extrabold mb-4">Suíte Premium</h1>
					<Image
						src={ImgVector}
						alt="Vector"
						width={100}
						height={100}
					/>
					<p className="text-xl text-gray-600 max-w-3xl mt-10">
						Um toque de sofisticação e aconchego, combinando conforto e detalhes
						elegantes para uma experiência de hospedagem superior.
					</p>
				</div>

				<div className="mb-16">
					<h2 className="text-2xl font-bold mb-6 mt-24">Galeria</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgPremium1}
								alt="Suíte Premium - Vista geral"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgPremium2}
								alt="Suíte Premium - Banheiro"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgPremium3}
								alt="Suíte Premium - Detalhes"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="lg:col-span-2">
						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6 mt-24">Descrição</h2>
							<p className="text-gray-700 mb-6">
								A Suíte Premium da Pousada Encanto da Serra combina conforto e
								sofisticação. Com um ambiente amplo e aconchegante, oferece cama
								king-size, banheira de hidromassagem e sacada privativa com
								vista para a natureza. Acomodação ideal para quem busca
								relaxamento e exclusividade, conta com ar-condicionado, Wi-Fi
								gratuito e café da manhã incluso.
							</p>
						</div>

						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6 mt-24">Características</h2>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center gap-3">
									<FaWifi className="text-purple-700 text-xl" />
									<span>Wi-Fi premium</span>
								</div>
								<div className="flex items-center gap-3">
									<FaTv className="text-purple-700 text-xl" />
									<span>Smart TV 50&apos; 4K</span>
								</div>
								<div className="flex items-center gap-3">
									<FaSnowflake className="text-purple-700 text-xl" />
									<span>Ar-condicionado digital</span>
								</div>
								<div className="flex items-center gap-3">
									<FaCoffee className="text-purple-700 text-xl" />
									<span>Máquina de café premium</span>
								</div>
								<div className="flex items-center gap-3">
									<FaBath className="text-purple-700 text-xl" />
									<span>Banheira de hidromassagem</span>
								</div>
								<div className="flex items-center gap-3">
									<FaBed className="text-purple-700 text-xl" />
									<span>Cama King size</span>
								</div>
								<div className="flex items-center gap-3">
									<FaCocktail className="text-purple-700 text-xl" />
									<span>Minibar completo</span>
								</div>
								<div className="flex items-center gap-3">
									<FaConciergeBell className="text-purple-700 text-xl" />
									<span>Serviço de quarto 24h</span>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:col-span-1">
						<div className="bg-white shadow-lg rounded-lg p-6 mb-10 sticky top-8">
							<h2 className="text-2xl font-bold mb-6">Reserve Agora</h2>
							<form
								onSubmit={handleReservation}
								className="space-y-4">
								<div>
									<label className=" text-gray-700 mb-2 flex items-center">
										<FaCalendarAlt className="mr-2" /> Check-in
									</label>
									<input
										type="date"
										value={checkIn}
										onChange={(e) => setCheckIn(e.target.value)}
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
										required
									/>
								</div>

								<div>
									<label className=" text-gray-700 mb-2 flex items-center">
										<FaCalendarAlt className="mr-2" /> Check-out
									</label>
									<input
										type="date"
										value={checkOut}
										onChange={(e) => setCheckOut(e.target.value)}
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
										required
									/>
								</div>

								<div>
									<label className=" text-gray-700 mb-2 flex items-center">
										<FaUsers className="mr-2" /> Número de hóspedes
									</label>
									<input
										type="number"
										min="1"
										max="3"
										value={guests}
										onChange={(e) => setGuests(parseInt(e.target.value))}
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
										required
									/>
								</div>

								<div className="flex space-x-4 pt-4">
									<button
										type="submit"
										className="flex-1 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg transition-colors">
										Reservar
									</button>

									<button
										type="button"
										onClick={handleSaveRoom}
										className={`px-4 py-2 rounded-lg transition-colors ${
											savedRoom
												? "bg-purple-100 text-purple-700 border border-purple-700"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}>
										{savedRoom ? "Salvo" : "Salvar"}
									</button>
								</div>
							</form>
						</div>

						<Card>
							<h2 className="text-2xl font-bold mb-6">Outras Suítes</h2>
							<div className="space-y-4">
								<Link
									href="/rooms/essencial"
									className="flex">
									<div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
										<div className="w-16 h-16 overflow-hidden rounded">
											<Image
												src={ImgEssencial}
												alt="Suíte Essencial"
												width={100}
												height={100}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h3 className="font-bold">Suíte Essencial</h3>
											<p className="text-sm text-gray-600">
												Conforto e praticidade
											</p>
										</div>
									</div>
								</Link>

								<Link
									href="/rooms/executiva"
									className="flex">
									<div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
										<div className="w-16 h-16 overflow-hidden rounded">
											<Image
												src={ImgExecutiva}
												alt="Suíte Executiva"
												width={100}
												height={100}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h3 className="font-bold">Suíte Executiva</h3>
											<p className="text-sm text-gray-600">
												Experiência premium
											</p>
										</div>
									</div>
								</Link>
							</div>
						</Card>
					</div>
				</div>
			</div>
			<Comments />
			<Footer />
		</>
	);
};

export default SuitePremium;
