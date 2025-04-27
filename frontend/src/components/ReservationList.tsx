import React, { useEffect } from "react";
import { useReservationStore } from "../store/reservationStore";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const ReservationList: React.FC = () => {
	const { reservations, loading, error, fetchReservations, cancelReservation } =
		useReservationStore();

	useEffect(() => {
		fetchReservations();
	}, [fetchReservations]);

	if (loading) {
		return <div className="p-4 text-center">Carregando reservas...</div>;
	}

	if (error) {
		return <div className="p-4 text-center text-red-600">{error}</div>;
	}

	if (reservations.length === 0) {
		return <div className="p-4 text-center">Nenhuma reserva encontrada.</div>;
	}

	const formatDate = (dateString: string) => {
		return format(new Date(dateString), "dd/MM/yyyy", { locale: ptBR });
	};

	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold mb-4">Suas Reservas</h2>

			{reservations.map((reservation) => (
				<div
					key={reservation.id}
					className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
					<div className="flex justify-between items-start">
						<div>
							<p className="font-bold">Suíte #{reservation.suiteId}</p>
							<p>Check-in: {formatDate(reservation.checkIn)}</p>
							<p>Check-out: {formatDate(reservation.checkOut)}</p>
							<p>Hóspedes: {reservation.guests}</p>
							<p
								className={`mt-2 font-medium ${
									reservation.status === "confirmada"
										? "text-green-600"
										: reservation.status === "cancelada"
										? "text-red-600"
										: "text-yellow-600"
								}`}>
								Status: {reservation.status}
							</p>
						</div>

						{reservation.status !== "cancelada" && (
							<button
								onClick={() => cancelReservation(reservation.id)}
								className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors">
								Cancelar
							</button>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default ReservationList;
