import { create } from "zustand";

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

export interface ReservationFormData {
	suiteId: number | null;
	checkIn: string;
	checkOut: string;
	guests: number;
}

export interface ReservationFormErrors {
	dataErro: string;
}

interface ReservationStore {
	formData: ReservationFormData;
	formErrors: ReservationFormErrors;

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
	formatarDadosParaEnvio: () => ReservationData;
	salvarReservaEmMemoria: () => void;
}

const initialFormData: ReservationFormData = {
	suiteId: null,
	checkIn: "",
	checkOut: "",
	guests: 1,
};

const initialFormErrors: ReservationFormErrors = {
	dataErro: "",
};

export const useReservationStore = create<ReservationStore>((set, get) => ({
	formData: initialFormData,
	formErrors: initialFormErrors,

	setSuiteInfo: (suiteInfo) => {
		set((state) => ({
			formData: {
				...state.formData,
				suiteId: suiteInfo.id,
			},
		}));
	},

	setField: (field, value) => {
		set((state) => {
			const newFormData = {
				...state.formData,
				[field]: value,
			};

			const newFormErrors = { ...state.formErrors };

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
				guests: Math.min(state.formData.guests + 1, 3), // Limitando a 3 hóspedes
			},
		}));
	},

	decrementarHospedes: () => {
		set((state) => ({
			formData: {
				...state.formData,
				guests: Math.max(state.formData.guests - 1, 1), // Mínimo de 1 hóspede
			},
		}));
	},

	setInitialGuests: (guests) => {
		set((state) => ({
			formData: {
				...state.formData,
				guests,
			},
		}));
	},

	validarFormulario: () => {
		const { formData, formErrors } = get();

		if (formErrors.dataErro) {
			return {
				valido: false,
				mensagem: formErrors.dataErro,
			};
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
}));
