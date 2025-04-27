import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

const api = axios.create({
	baseURL,
});

export const suitesApi = {
	getAll: async () => {
		const response = await api.get("/suites");
		return response.data;
	},

	getByType: async (type: string) => {
		const response = await api.get(`/suites/${type}`);
		return response.data;
	},

	toggleSave: async (suiteId: number, isSaved: boolean) => {
		const response = await api.post("/saved-suites", { suiteId, isSaved });
		return response.data;
	},

	getSaved: async () => {
		const response = await api.get("/saved-suites");
		return response.data;
	},
};

export const reviewsApi = {
	getAll: async (suiteId?: number) => {
		const params = suiteId ? { suiteId } : {};
		const response = await api.get("/reviews", { params });
		return response.data;
	},

	create: async (reviewData: {
		suiteId: number;
		userName: string;
		rating: number;
		comment: string;
	}) => {
		const response = await api.post("/reviews", reviewData);
		return response.data;
	},
};

export default api;
