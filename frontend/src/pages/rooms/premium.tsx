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
} from "react-icons/fa";
import Head from "next/head";
import ImgPremium1 from "../../../public/assets/abril/Villa.jpeg";
import ImgPremium2 from "../../../public/assets/abril/Casa_praia.jpeg";
import ImgPremium3 from "../../../public/assets/abril/outdoor_kitchen.jpeg";
import ImgEssencial from "../../../public/assets/abril/cafe_manha.jpeg";
import ImgExecutiva from "../../../public/assets/abril/bedroom1.jpeg";

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
		// Redirecionar para página de sucesso
		window.location.href = "/success";
	};

	return (
		<>
			<Head>
				<title>Suíte Premium | Hotel Paradise</title>
			</Head>

			{/* Header e descrição breve */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-extrabold mb-4">Suíte Premium</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Um toque de sofisticação e aconchego, combinando conforto e detalhes
						elegantes para uma experiência de hospedagem superior.
					</p>
				</div>

				{/* Galeria de imagens */}
				<div className="mb-16">
					<h2 className="text-2xl font-bold mb-6">Galeria</h2>
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
					{/* Descrição detalhada e características */}
					<div className="lg:col-span-2">
						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6">Descrição</h2>
							<p className="text-gray-700 mb-6">
								Nossa Suíte Premium eleva sua experiência de hospedagem a um
								novo patamar. Com ambientes amplos e cuidadosamente decorados,
								essa acomodação foi projetada para proporcionar o equilíbrio
								perfeito entre elegância e conforto. A suíte conta com uma cama
								king size com lençóis de 400 fios, área de estar separada e um
								luxuoso banheiro com banheira de hidromassagem.
							</p>
							<p className="text-gray-700 mb-6">
								O espaço é ideal para casais ou viajantes a negócios que buscam
								um ambiente sofisticado para relaxar e trabalhar. A suíte inclui
								uma pequena área de trabalho ergonômica, blackout total nas
								cortinas e um sistema de som ambiente para criar a atmosfera
								perfeita para qualquer momento.
							</p>
							<p className="text-gray-700">
								Os hóspedes da Suíte Premium têm acesso preferencial ao spa do
								hotel e um welcome drink servido no restaurante do hotel. O
								serviço de quarto está disponível 24 horas para garantir todo o
								conforto durante sua estadia.
							</p>
						</div>

						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6">Características</h2>
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

						{/* Avaliações dos usuários */}
						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6">Avaliações</h2>
							<div className="space-y-6">
								<div className="bg-gray-50 p-6 rounded-lg">
									<div className="flex items-center mb-2">
										<div className="font-bold">Ana R.</div>
										<div className="mx-2">•</div>
										<div className="text-yellow-500">★★★★★</div>
									</div>
									<p className="text-gray-700">
										&ldquo;Ficamos hospedados na Suíte Premium para comemorar
										nosso aniversário de casamento e foi incrível! A banheira de
										hidromassagem é maravilhosa e a cama extremamente
										confortável. O serviço impecável.&rdquo;
									</p>
								</div>

								<div className="bg-gray-50 p-6 rounded-lg">
									<div className="flex items-center mb-2">
										<div className="font-bold">Carlos M.</div>
										<div className="mx-2">•</div>
										<div className="text-yellow-500">★★★★★</div>
									</div>
									<p className="text-gray-700">
										&ldquo;Viajo a negócios frequentemente e esta suite é
										perfeita. O espaço de trabalho é muito funcional e o Wi-Fi é
										realmente rápido. A localização do hotel também é excelente,
										perto de tudo.&rdquo;
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Formulário de reserva e sugestões */}
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

						{/* Outras suítes */}
						<div className="bg-white shadow-lg rounded-lg p-6">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SuitePremium;
