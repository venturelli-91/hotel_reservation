import React, { useState, useEffect } from "react";
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
	FaHome,
} from "react-icons/fa";
import Head from "next/head";
import ImgExecutiva1 from "../../../public/assets/abril/lovely.jpeg";
import ImgExecutiva2 from "../../../public/assets/abril/cafe_manha.jpeg";
import ImgExecutiva3 from "../../../public/assets/abril/Mask group.png";
import ImgEssencial from "../../../public/assets/abril/bedroom1.jpeg";
import ImgPremium from "../../../public/assets/abril/bedroom2.png";
import ImgRectangle from "../../../public/assets/abril/Rectangle 49.png";
import ImgStars from "../../../public/assets/abril/Group 34.png";
import ImgVector from "../../../public/assets/abril/Vector 8.png";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import { Card } from "flowbite-react";
import { suitesApi } from "@/services/api";
import { useReservationStore } from "@/store/reservationStore";
import { useRouter } from "next/router";

const SuiteExecutiva = () => {
	const [savedRoom, setSavedRoom] = useState(false);
	const [suiteId, setSuiteId] = useState<number | null>(null);
	const router = useRouter();

	const {
		formData,
		setField,
		incrementarHospedes,
		decrementarHospedes,
		setSuiteInfo,
		setInitialGuests,
		validarFormulario,
		salvarReservaEmMemoria,
		resetarFormulario,
	} = useReservationStore();

	useEffect(() => {
		const fetchSuiteData = async () => {
			try {
				const data = await suitesApi.getByType("executiva");
				setSavedRoom(data.isSaved);
				setSuiteId(data.id);

				setSuiteInfo({ id: data.id, isSaved: data.isSaved });
				resetarFormulario();
				setInitialGuests(2);
			} catch (error) {
				console.error("Erro ao carregar dados da suíte:", error);
			}
		};

		fetchSuiteData();
	}, [setSuiteInfo, resetarFormulario, setInitialGuests]);

	const handleSaveRoom = async () => {
		try {
			if (suiteId) {
				await suitesApi.toggleSave(suiteId, !savedRoom);
				setSavedRoom(!savedRoom);
			}
		} catch (error) {
			console.error("Erro ao salvar/remover acomodação:", error);
		}
	};

	const handleReservation = (e: React.FormEvent) => {
		e.preventDefault();

		const { valido, mensagem } = validarFormulario();

		if (!valido) {
			alert(mensagem);
			return;
		}

		salvarReservaEmMemoria();
		router.push("/success");
	};

	return (
		<>
			<Head>
				<title>Suíte Executiva | Hotel Paradise</title>
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
					<h1 className="text-4xl font-extrabold mb-4">Suíte Executiva</h1>
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
								alt="Suíte Executiva - Banheiro"
								className="w-full h-full object-cover transition-transform hover:scale-105"
								width={600}
								height={400}
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-lg">
							<Image
								src={ImgExecutiva3}
								alt="Suíte Executiva - Detalhes"
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
								A Suíte Executiva da Pousada Encanto da Serra combina conforto e
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
										value={formData.checkIn}
										onChange={(e) => setField("checkIn", e.target.value)}
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
										value={formData.checkOut}
										onChange={(e) => setField("checkOut", e.target.value)}
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
										required
									/>
								</div>

								<div>
									<label className=" text-gray-700 mb-2 flex items-center">
										<FaUsers className="mr-2" /> Número de hóspedes
									</label>
									<div className="flex items-center space-x-2">
										<button
											type="button"
											onClick={decrementarHospedes}
											className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200"
											aria-label="Decrementar hóspedes">
											-
										</button>
										<input
											type="number"
											min="1"
											max="3"
											value={formData.guests}
											onChange={(e) =>
												setField("guests", parseInt(e.target.value))
											}
											className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-center"
											required
										/>
										<button
											type="button"
											onClick={incrementarHospedes}
											className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200"
											aria-label="Incrementar hóspedes">
											+
										</button>
									</div>
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
			<Comments suiteId={suiteId || undefined} />
			<Footer />
		</>
	);
};

export default SuiteExecutiva;
