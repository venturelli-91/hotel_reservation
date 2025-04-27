import { create } from "zustand";
import { reservationsApi } from "../services/api";

// Types
export interface SuiteInfo {
	id: number;
	isSaved: boolean;
}

export interface ReservationData {
	suiteId: number | null;
	checkIn: string;
	checkOut: string;
	guests: number;
}

export interface Reservation {
	id: number;
	suiteId: number;
	checkIn: string;
	checkOut: string;
	guests: number;
	status: "confirmada" | "cancelada" | "pendente";
}

export interface ReservationFormData {
	suiteId: number | null;
	checkIn: string;
	checkOut: string;
	guests: number;
}

export interface ReservationFormErrors {
	dataErro: string;
}

// Store interface
interface ReservationStore {
	// State
	formData: ReservationFormData;
	formErrors: ReservationFormErrors;
	reservations: Reservation[];
	loading: boolean;
	error: string | null;

	// Form actions
	setSuiteInfo: (suiteInfo: SuiteInfo) => void;
	setField: (
		field: keyof ReservationFormData,
		value: string | number | null
	) => void;
	incrementarHospedes: () => void;
	decrementarHospedes: () => void;
	setInitialGuests: (guests: number) => void;
	validarFormulario: () => { valido: boolean; mensagem: string };
	resetarFormulario: () => void;

	// Data actions
	formatarDadosParaEnvio: () => ReservationData;
	salvarReservaEmMemoria: () => void;

	// API actions
	createReservation: () => Promise<void>;
	fetchReservations: () => Promise<void>;
	cancelReservation: (reservationId: number) => Promise<void>;
}

// Initial values
const initialFormData: ReservationFormData = {
	suiteId: null,
	checkIn: "",
	checkOut: "",
	guests: 1,
};

const initialFormErrors: ReservationFormErrors = {
	dataErro: "",
};

// Store implementation
export const useReservationStore = create<ReservationStore>((set, get) => ({
	// Initial state
	formData: initialFormData,
	formErrors: initialFormErrors,
	reservations: [],
	loading: false,
	error: null,

	// Form actions
	setSuiteInfo: (suiteInfo) => {
		set((state) => ({
			formData: { ...state.formData, suiteId: suiteInfo.id },
		}));
	},

	setField: (field, value) => {
		set((state) => {
			const newFormData = {
				...state.formData,
				[field]: value,
			};

			const newFormErrors = { ...state.formErrors };

			// Date validation
			if (field === "checkIn" || field === "checkOut") {
				const { checkIn, checkOut } = newFormData;

				if (checkIn && checkOut) {
					const checkInDate = new Date(checkIn);
					const checkOutDate = new Date(checkOut);
					const minCheckOutDate = new Date(checkInDate);
					minCheckOutDate.setDate(minCheckOutDate.getDate() + 4);

					if (checkOutDate < minCheckOutDate) {
						newFormErrors.dataErro =
							"A data de saída deve ser pelo menos 4 dias após a data de entrada";
					} else {
						newFormErrors.dataErro = "";
					}
				}
			}

			return { formData: newFormData, formErrors: newFormErrors };
		});
	},

	incrementarHospedes: () => {
		set((state) => ({
			formData: {
				...state.formData,
				guests: Math.min(state.formData.guests + 1, 3), // Max 3 guests
			},
		}));
	},

	decrementarHospedes: () => {
		set((state) => ({
			formData: {
				...state.formData,
				guests: Math.max(state.formData.guests - 1, 1), // Min 1 guest
			},
		}));
	},

	setInitialGuests: (guests) => {
		set((state) => ({
			formData: { ...state.formData, guests },
		}));
	},

	validarFormulario: () => {
		const { formData, formErrors } = get();

		if (formErrors.dataErro) {
			return { valido: false, mensagem: formErrors.dataErro };
		}

		if (!formData.checkIn) {
			return {
				valido: false,
				mensagem: "Por favor, selecione a data de check-in.",
			};
		}

		if (!formData.checkOut) {
			return {
				valido: false,
				mensagem: "Por favor, selecione a data de check-out.",
			};
		}

		if (formData.guests < 1) {
			return {
				valido: false,
				mensagem: "Por favor, selecione pelo menos 1 hóspede.",
			};
		}

		return { valido: true, mensagem: "" };
	},

	formatarDadosParaEnvio: () => {
		const { formData } = get();
		return {
			suiteId: formData.suiteId,
			checkIn: formData.checkIn,
			checkOut: formData.checkOut,
			guests: formData.guests,
		};
	},

	salvarReservaEmMemoria: () => {
		const dadosFormatados = get().formatarDadosParaEnvio();
		localStorage.setItem("reservationData", JSON.stringify(dadosFormatados));
	},

	resetarFormulario: () => {
		set({
			formData: initialFormData,
			formErrors: initialFormErrors,
		});
	},

	// API actions
	createReservation: async () => {
		const { formatarDadosParaEnvio, validarFormulario } = get();
		const { valido, mensagem } = validarFormulario();

		if (!valido) {
			set({ error: mensagem });
			return;
		}

		try {
			set({ loading: true, error: null });
			const reservationData = formatarDadosParaEnvio();

			if (!reservationData.suiteId) {
				set({ loading: false, error: "ID da suíte não selecionado" });
				return;
			}

			await reservationsApi.create({
				suiteId: reservationData.suiteId,
				checkIn: reservationData.checkIn,
				checkOut: reservationData.checkOut,
				guests: reservationData.guests,
			});

			get().fetchReservations();
			get().resetarFormulario();
		} catch {
			set({ error: "Erro ao criar reserva. Tente novamente." });
		} finally {
			set({ loading: false });
		}
	},

	fetchReservations: async () => {
		try {
			set({ loading: true, error: null });
			const data = await reservationsApi.getAll();
			set({ reservations: data });
		} catch {
			set({ error: "Erro ao buscar reservas." });
		} finally {
			set({ loading: false });
		}
	},

	cancelReservation: async (reservationId: number) => {
		try {
			set({ loading: true, error: null });
			await reservationsApi.cancel(reservationId);
			get().fetchReservations();
		} catch {
			set({ error: "Erro ao cancelar reserva." });
		} finally {
			set({ loading: false });
		}
	},
}));
