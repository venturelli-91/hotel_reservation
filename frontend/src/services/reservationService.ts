const API_URL = "http://localhost:3001/api";

// Interface para o formulário de reserva
export interface ReservationForm {
	nomeCompleto: string;
	email: string;
	telefone: string;
	dataEntrada: string;
	dataSaida: string;
	qtdPessoas: number;
}

// Criar uma nova reserva
export const createReservation = async (reservation: ReservationForm) => {
	try {
		const response = await fetch(`${API_URL}/reservations`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reservation),
		});

		if (!response.ok) {
			throw new Error("Erro ao criar reserva");
		}

		return await response.json();
	} catch (error) {
		console.error("Erro no serviço de reserva:", error);
		throw error;
	}
};

// Obter todas as reservas
export const getAllReservations = async () => {
	try {
		const response = await fetch(`${API_URL}/reservations`);

		if (!response.ok) {
			throw new Error("Erro ao buscar reservas");
		}

		return await response.json();
	} catch (error) {
		console.error("Erro no serviço de reserva:", error);
		throw error;
	}
};
