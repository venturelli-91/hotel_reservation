import React, { useEffect, useState } from "react";
import { getAllReservations } from "../../services/reservationService";
import Footer from "@/components/Footer";

interface Reservation {
	id: number;
	nomeCompleto: string;
	email: string;
	telefone: string;
	dataEntrada: string;
	dataSaida: string;
	qtdPessoas: number;
	createdAt: string;
	updatedAt: string;
}

const ReservationsPage = () => {
	const [reservations, setReservations] = useState<Reservation[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchReservations = async () => {
			try {
				const data = await getAllReservations();
				setReservations(data);
				setLoading(false);
			} catch (err) {
				setError(
					"Erro ao carregar as reservas. Por favor, tente novamente mais tarde."
				);
				setLoading(false);
				console.error("Erro ao buscar reservas:", err);
			}
		};

		fetchReservations();
	}, []);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-2xl text-purple-600">Carregando reservas...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-2xl text-red-600">{error}</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-center mb-10 text-purple-800">
					Administração de Reservas
				</h1>

				{reservations.length === 0 ? (
					<p className="text-xl text-center text-gray-600">
						Nenhuma reserva encontrada.
					</p>
				) : (
					<div className="overflow-x-auto">
						<table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
							<thead className="bg-purple-600 text-white">
								<tr>
									<th className="py-3 px-4 text-left">ID</th>
									<th className="py-3 px-4 text-left">Nome</th>
									<th className="py-3 px-4 text-left">Email</th>
									<th className="py-3 px-4 text-left">Telefone</th>
									<th className="py-3 px-4 text-left">Entrada</th>
									<th className="py-3 px-4 text-left">Saída</th>
									<th className="py-3 px-4 text-left">Pessoas</th>
									<th className="py-3 px-4 text-left">Data de Criação</th>
								</tr>
							</thead>
							<tbody>
								{reservations.map((reservation) => (
									<tr
										key={reservation.id}
										className="border-b border-gray-200 hover:bg-gray-100">
										<td className="py-3 px-4">{reservation.id}</td>
										<td className="py-3 px-4">{reservation.nomeCompleto}</td>
										<td className="py-3 px-4">{reservation.email}</td>
										<td className="py-3 px-4">{reservation.telefone}</td>
										<td className="py-3 px-4">{reservation.dataEntrada}</td>
										<td className="py-3 px-4">{reservation.dataSaida}</td>
										<td className="py-3 px-4">{reservation.qtdPessoas}</td>
										<td className="py-3 px-4">
											{new Date(reservation.createdAt).toLocaleString("pt-BR")}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default ReservationsPage;
