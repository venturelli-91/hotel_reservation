import { reservationsApi } from "./api";

// Interface para os dados da reserva
interface ReservationData {
	suiteId: number;
	checkIn: string;
	checkOut: string;
	guests: number;
}

// Função para obter todas as reservas
export const getAllReservations = async () => {
	try {
		const data = await reservationsApi.getAll();
		return data;
	} catch (error) {
		console.error("Erro ao buscar reservas:", error);
		throw error;
	}
};

// Função para obter reservas do usuário atual
export const getUserReservations = async () => {
	try {
		const data = await reservationsApi.getUserReservations();
		return data;
	} catch (error) {
		console.error("Erro ao buscar reservas do usuário:", error);
		throw error;
	}
};

// Função para criar uma nova reserva
export const createReservation = async (reservationData: ReservationData) => {
	try {
		const data = await reservationsApi.create(reservationData);
		return data;
	} catch (error) {
		console.error("Erro ao criar reserva:", error);
		throw error;
	}
};

// Função para cancelar uma reserva
export const cancelReservation = async (reservationId: number) => {
	try {
		const data = await reservationsApi.cancel(reservationId);
		return data;
	} catch (error) {
		console.error("Erro ao cancelar reserva:", error);
		throw error;
	}
};
