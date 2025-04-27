import axios from "axios";

// Configuração base da API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
const api = axios.create({ baseURL: API_URL });

// Interfaces para tipagem
interface ReviewData {
	suiteId: number;
	userName: string;
	rating: number;
	comment: string;
}

interface ReservationData {
	suiteId: number;
	checkIn: string;
	checkOut: string;
	guests: number;
}

// API de suítes
export const suitesApi = {
	getAll: async () => {
		const { data } = await api.get("/suites");
		return data;
	},

	getByType: async (type: string) => {
		const { data } = await api.get(`/suites/${type}`);
		return data;
	},

	toggleSave: async (suiteId: number, isSaved: boolean) => {
		const { data } = await api.post("/saved-suites", { suiteId, isSaved });
		return data;
	},

	getSaved: async () => {
		const { data } = await api.get("/saved-suites");
		return data;
	},
};

// API de avaliações
export const reviewsApi = {
	getAll: async (suiteId?: number) => {
		const params = suiteId ? { suiteId } : {};
		const { data } = await api.get("/reviews", { params });
		return data;
	},

	create: async (reviewData: ReviewData) => {
		const { data } = await api.post("/reviews", reviewData);
		return data;
	},
};

// API de reservas
export const reservationsApi = {
	create: async (reservationData: ReservationData) => {
		const { data } = await api.post("/reservations", reservationData);
		return data;
	},

	getAll: async () => {
		const { data } = await api.get("/reservations");
		return data;
	},

	getUserReservations: async () => {
		const { data } = await api.get("/reservations/user");
		return data;
	},

	cancel: async (reservationId: number) => {
		const { data } = await api.delete(`/reservations/${reservationId}`);
		return data;
	},
};

export default api;
