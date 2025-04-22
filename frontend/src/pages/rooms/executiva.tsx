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
	FaSpa,
	FaKey,
} from "react-icons/fa";
import Head from "next/head";
import ImgExecutiva1 from "../../../public/assets/abril/lovely.jpeg";
import ImgExecutiva2 from "../../../public/assets/abril/cafe_manha.jpeg";
import ImgExecutiva3 from "../../../public/assets/abril/Mask group.png";
import ImgEssencial from "../../../public/assets/abril/bedroom1.jpeg";
import ImgPremium from "../../../public/assets/abril/bedroom2.png";

const SuiteExecutiva = () => {
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
				<title>Suíte Executiva | Hotel Paradise</title>
			</Head>

			{/* Header e descrição breve */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-extrabold mb-4">Suíte Executiva</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Experiência exclusiva com requinte e comodidades premium para o
						máximo de conforto e luxo durante sua estadia.
					</p>
				</div>

				{/* Galeria de imagens */}
				<div className="mb-16">
					<h2 className="text-2xl font-bold mb-6">Galeria</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgExecutiva1}
								alt="Suíte Executiva - Vista geral"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgExecutiva2}
								alt="Suíte Executiva - Sala de estar"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgExecutiva3}
								alt="Suíte Executiva - Banheiro spa"
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
								Nossa Suíte Executiva representa o ápice da experiência de
								hospedagem, combinando luxo, conforto e exclusividade em um
								único espaço. Com 70m², esta suíte oferece ambientes separados
								para dormir e relaxar, incluindo uma espaçosa sala de estar,
								quarto com cama super king e um deslumbrante banheiro com
								acabamentos em mármore e banheira de imersão.
							</p>
							<p className="text-gray-700 mb-6">
								Ideal para hóspedes que buscam o mais alto padrão em hospedagem,
								a Suíte Executiva conta com amenities exclusivos, janelas do
								chão ao teto com vista panorâmica e sistema de automação que
								controla iluminação, cortinas e temperatura através de tablets
								disponíveis no quarto.
							</p>
							<p className="text-gray-700">
								Os hóspedes da Suíte Executiva têm acesso VIP a todos os
								serviços do hotel, incluindo check-in e check-out privativo,
								transfer do aeroporto, acesso ilimitado ao spa, e um exclusivo
								serviço de mordomo disponível 24 horas para atender todas as
								suas necessidades.
							</p>
						</div>

						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6">Características</h2>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center gap-3">
									<FaWifi className="text-purple-700 text-xl" />
									<span>Wi-Fi de alta velocidade dedicado</span>
								</div>
								<div className="flex items-center gap-3">
									<FaTv className="text-purple-700 text-xl" />
									<span>Smart TV 65&quot; OLED com sistema de som</span>
								</div>
								<div className="flex items-center gap-3">
									<FaSnowflake className="text-purple-700 text-xl" />
									<span>Climatização inteligente</span>
								</div>
								<div className="flex items-center gap-3">
									<FaCoffee className="text-purple-700 text-xl" />
									<span>Máquina de café premium e seleção de chás</span>
								</div>
								<div className="flex items-center gap-3">
									<FaBath className="text-purple-700 text-xl" />
									<span>Banheiro spa com sauna privativa</span>
								</div>
								<div className="flex items-center gap-3">
									<FaBed className="text-purple-700 text-xl" />
									<span>Cama Super King com colchão premium</span>
								</div>
								<div className="flex items-center gap-3">
									<FaSpa className="text-purple-700 text-xl" />
									<span>Tratamento de spa complementar</span>
								</div>
								<div className="flex items-center gap-3">
									<FaKey className="text-purple-700 text-xl" />
									<span>Serviço de mordomo privativo</span>
								</div>
							</div>
						</div>

						{/* Avaliações dos usuários */}
						<div className="mb-10">
							<h2 className="text-2xl font-bold mb-6">Avaliações</h2>
							<div className="space-y-6">
								<div className="bg-gray-50 p-6 rounded-lg">
									<div className="flex items-center mb-2">
										<div className="font-bold">Roberto L.</div>
										<div className="mx-2">•</div>
										<div className="text-yellow-500">★★★★★</div>
									</div>
									<p className="text-gray-700">
										&ldquo;Simplesmente indescritível! A Suíte Executiva superou
										todas as expectativas. O serviço de mordomo foi impecável e
										o banheiro com sauna privativa é um diferencial incrível. Já
										estou planejando minha próxima estadia.&rdquo;
									</p>
								</div>

								<div className="bg-gray-50 p-6 rounded-lg">
									<div className="flex items-center mb-2">
										<div className="font-bold">Julia T.</div>
										<div className="mx-2">•</div>
										<div className="text-yellow-500">★★★★★</div>
									</div>
									<p className="text-gray-700">
										&ldquo;Fiquei hospedada durante uma semana na Suíte
										Executiva e foi uma experiência transformadora. A vista é
										espetacular, a cama é a mais confortável em que já dormi e o
										tratamento de spa incluído foi revigorante. Vale cada
										centavo!&rdquo;
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
										max="4"
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
												Elegância e conforto
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

export default SuiteExecutiva;
