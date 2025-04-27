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
} from "react-icons/fa";
import Head from "next/head";
import ImgEssencial1 from "../../../public/assets/abril/bedroom1.jpeg";
import ImgEssencial2 from "../../../public/assets/abril/bedroom2.png";
import ImgEssencial3 from "../../../public/assets/abril/bedroom3.png";
import ImgPremium from "../../../public/assets/abril/bedroom2.png";
import ImgExecutiva from "../../../public/assets/abril/bedroom1.jpeg";
import Comments from "@/components/Comments";

const SuiteEssencial = () => {
	const [checkIn, setCheckIn] = useState("");
	const [checkOut, setCheckOut] = useState("");
	const [guests, setGuests] = useState(1);
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
				<title>Suíte Essencial | Hotel Paradise</title>
			</Head>

			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-extrabold mb-4">Suíte Essencial</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Conforto e praticidade para uma estadia agradável, com todas as
						comodidades essenciais para tornar sua hospedagem perfeita.
					</p>
				</div>

				<div className="mb-16">
					<h2 className="text-2xl font-bold mb-6">Galeria</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgEssencial1}
								alt="Suíte Essencial - Vista geral"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgEssencial2}
								alt="Suíte Essencial - Banheiro"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgEssencial3}
								alt="Suíte Essencial - Detalhes"
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
							<h2 className="text-2xl font-bold mb-6">Descrição</h2>
							<p className="text-gray-700 mb-6">
								Nossa Suíte Essencial oferece o equilíbrio perfeito entre
								conforto e simplicidade. Projetada para proporcionar uma estadia
								agradável, esta acomodação conta com uma decoração clean e
								moderna, cama queen size com lençóis de algodão egípcio de 300
								fios, e um banheiro funcional equipado com amenities premium.
							</p>
							<p className="text-gray-700 mb-6">
								Ideal para viajantes que buscam um espaço confortável para
								descansar após um dia de trabalho ou turismo, a Suíte Essencial
								tem tudo o que você precisa para uma estadia tranquila e sem
								complicações. O ambiente é perfeitamente climatizado e isolado
								acusticamente para garantir seu conforto.
							</p>
							<p className="text-gray-700">
								Você terá acesso a todas as áreas comuns do hotel, incluindo
								academia, piscina e restaurante, garantindo uma experiência
								completa durante sua hospedagem.
							</p>
						</div>

						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6">Características</h2>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center gap-3">
									<FaWifi className="text-purple-700 text-xl" />
									<span>Wi-Fi de alta velocidade</span>
								</div>
								<div className="flex items-center gap-3">
									<FaTv className="text-purple-700 text-xl" />
									<span>Smart TV 42&quot;</span>
								</div>
								<div className="flex items-center gap-3">
									<FaSnowflake className="text-purple-700 text-xl" />
									<span>Ar-condicionado</span>
								</div>
								<div className="flex items-center gap-3">
									<FaCoffee className="text-purple-700 text-xl" />
									<span>Máquina de café</span>
								</div>
								<div className="flex items-center gap-3">
									<FaBath className="text-purple-700 text-xl" />
									<span>Banheiro privativo</span>
								</div>
								<div className="flex items-center gap-3">
									<FaBed className="text-purple-700 text-xl" />
									<span>Cama Queen size</span>
								</div>
							</div>
						</div>

						<Comments />
					</div>
				</div>

				<div className="lg:col-span-1">
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
										max="2"
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

						<div className="bg-white shadow-lg rounded-lg p-6">
							<h2 className="text-2xl font-bold mb-6">Outras Suítes</h2>
							<div className="space-y-4">
								<Link
									href="/rooms/premium"
									className="flex">
									<div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
										<div className="w-16 h-16 overflow-hidden rounded">
											<Image
												src={ImgPremium}
												alt="Suíte Premium"
												width={100}
												height={100}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h3 className="font-bold">Suíte Premium</h3>
											<p className="text-sm text-gray-600">
												Conforto e sofisticação
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SuiteEssencial;
