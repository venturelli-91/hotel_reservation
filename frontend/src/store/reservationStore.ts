import { create } from "zustand";

// Interfaces
export interface ReservationFormData {
	nomeCompleto: string;
	email: string;
	telefone: string;
	dataEntrada: string;
	dataSaida: string;
	qtdPessoas: number;
}

export interface ReservationFormErrors {
	dataErro: string;
}

// Interface da store
interface ReservationStore {
	// Estado
	formData: ReservationFormData;
	formErrors: ReservationFormErrors;

	// Ações
	setField: (field: keyof ReservationFormData, value: string | number) => void;
	incrementarPessoas: () => void;
	decrementarPessoas: () => void;
	validarFormulario: () => { valido: boolean; mensagem: string };
	resetarFormulario: () => void;
}

// Valores iniciais
const initialFormData: ReservationFormData = {
	nomeCompleto: "",
	email: "",
	telefone: "",
	dataEntrada: "",
	dataSaida: "",
	qtdPessoas: 0,
};

const initialFormErrors: ReservationFormErrors = {
	dataErro: "",
};

// Criação da store
export const useReservationStore = create<ReservationStore>((set, get) => ({
	// Estado inicial
	formData: initialFormData,
	formErrors: initialFormErrors,

	// Ações
	setField: (field, value) => {
		set((state) => {
			const newFormData = {
				...state.formData,
				[field]: value,
			};

			// Validação específica para datas
			const newFormErrors = { ...state.formErrors };

			if (field === "dataEntrada" || field === "dataSaida") {
				const { dataEntrada, dataSaida } = newFormData;

				if (dataEntrada && dataSaida) {
					const dataEntradaObj = new Date(
						dataEntrada.split("/").reverse().join("-")
					);
					const dataSaidaObj = new Date(
						dataSaida.split("/").reverse().join("-")
					);

					// Adiciona 4 dias à data de entrada
					const minDataSaida = new Date(dataEntradaObj);
					minDataSaida.setDate(minDataSaida.getDate() + 4);

					if (dataSaidaObj < minDataSaida) {
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

	incrementarPessoas: () => {
		set((state) => ({
			formData: {
				...state.formData,
				qtdPessoas: state.formData.qtdPessoas + 1,
			},
		}));
	},

	decrementarPessoas: () => {
		set((state) => ({
			formData: {
				...state.formData,
				qtdPessoas:
					state.formData.qtdPessoas > 0 ? state.formData.qtdPessoas - 1 : 0,
			},
		}));
	},

	validarFormulario: () => {
		const { formData, formErrors } = get();

		if (formData.qtdPessoas <= 0) {
			return {
				valido: false,
				mensagem: "Por favor, selecione pelo menos 1 pessoa.",
			};
		}

		if (formErrors.dataErro) {
			return {
				valido: false,
				mensagem: "Por favor, corrija os erros no formulário antes de enviar.",
			};
		}

		// Validação de campos obrigatórios
		if (!formData.nomeCompleto.trim()) {
			return {
				valido: false,
				mensagem: "Por favor, preencha o nome completo.",
			};
		}

		if (!formData.email.trim()) {
			return {
				valido: false,
				mensagem: "Por favor, preencha o email.",
			};
		}

		if (!formData.telefone.trim()) {
			return {
				valido: false,
				mensagem: "Por favor, preencha o número de telefone.",
			};
		}

		if (!formData.dataEntrada.trim()) {
			return {
				valido: false,
				mensagem: "Por favor, preencha a data de entrada.",
			};
		}

		if (!formData.dataSaida.trim()) {
			return {
				valido: false,
				mensagem: "Por favor, preencha a data de saída.",
			};
		}

		return { valido: true, mensagem: "" };
	},

	resetarFormulario: () => {
		set({
			formData: initialFormData,
			formErrors: initialFormErrors,
		});
	},
}));
