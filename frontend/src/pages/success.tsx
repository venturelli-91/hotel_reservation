import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaCheckCircle, FaHome, FaCalendarAlt, FaUsers } from "react-icons/fa";

interface ReservationData {
	suiteId: number;
	checkIn: string;
	checkOut: string;
	guests: number;
}

const SuccessPage = () => {
	const [reservationData, setReservationData] =
		useState<ReservationData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		// Recuperar dados da localStorage se disponível
		const storedData = localStorage.getItem("reservationData");
		if (storedData) {
			try {
				const parsedData = JSON.parse(storedData);
				setReservationData(parsedData);

				// Opcional: limpar dados após ler
				localStorage.removeItem("reservationData");
			} catch (err) {
				console.error("Erro ao analisar dados da reserva:", err);
				setError("Não foi possível recuperar os detalhes da sua reserva.");
			} finally {
				setLoading(false);
			}
		} else {
			setLoading(false);
			setError("Nenhuma informação de reserva encontrada.");
		}
	}, []);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-700 mx-auto"></div>
					<p className="mt-4 text-xl">Carregando...</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>Reserva Confirmada | Hotel Paradise</title>
			</Head>

			<div className="min-h-screen bg-gray-50 py-16">
				<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="p-8">
						<div className="flex items-center justify-center mb-8">
							<FaCheckCircle className="text-green-500 text-6xl" />
						</div>

						<h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
							Reserva Realizada com Sucesso!
						</h1>

						<p className="text-center text-gray-600 mb-8">
							Obrigado por escolher o Hotel Paradise. Sua reserva foi confirmada
							e estamos ansiosos para recebê-lo!
						</p>

						{error ? (
							<div className="bg-red-100 p-4 rounded-lg mb-8">
								<p className="text-red-700">{error}</p>
							</div>
						) : (
							reservationData && (
								<div className="bg-purple-50 p-6 rounded-lg mb-8">
									<h2 className="text-xl font-semibold mb-4 text-purple-800">
										Detalhes da Reserva
									</h2>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="flex items-center">
											<FaCalendarAlt className="text-purple-700 mr-3" />
											<div>
												<p className="text-sm text-gray-500">Check-in</p>
												<p className="font-medium">{reservationData.checkIn}</p>
											</div>
										</div>

										<div className="flex items-center">
											<FaCalendarAlt className="text-purple-700 mr-3" />
											<div>
												<p className="text-sm text-gray-500">Check-out</p>
												<p className="font-medium">
													{reservationData.checkOut}
												</p>
											</div>
										</div>

										<div className="flex items-center">
											<FaUsers className="text-purple-700 mr-3" />
											<div>
												<p className="text-sm text-gray-500">Hóspedes</p>
												<p className="font-medium">{reservationData.guests}</p>
											</div>
										</div>
									</div>
								</div>
							)
						)}

						<div className="flex flex-col items-center justify-center space-y-4">
							<p className="text-gray-600 text-center">
								Você receberá um e-mail de confirmação com todos os detalhes da
								sua reserva. Em caso de dúvidas, entre em contato com nossa
								equipe.
							</p>

							<Link
								href="/"
								className="flex items-center text-purple-700 font-medium hover:underline mt-4">
								<FaHome className="mr-2" /> Voltar para a Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SuccessPage;
