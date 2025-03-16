import React, { ChangeEvent } from "react";
import { Button } from "flowbite-react";
import { useReservationStore } from "../store/reservationStore";
import Image from "next/image";
import Rectangle from "../../public/assets/Rectangle 8.png";

const ReservationForm = () => {
	const {
		formData,
		formErrors,
		setField,
		incrementarPessoas,
		decrementarPessoas,
		validarFormulario,
		resetarFormulario,
	} = useReservationStore();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;

		const fieldMap: Record<string, keyof typeof formData> = {
			"nome-completo": "nomeCompleto",
			email: "email",
			telefone: "telefone",
			"data-entrada": "dataEntrada",
			"data-saida": "dataSaida",
			"qtd-pessoas": "qtdPessoas",
		};

		const field = fieldMap[id];
		if (field) {
			setField(field, value);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const { valido, mensagem } = validarFormulario();

		if (!valido) {
			alert(mensagem);
			return;
		}

		console.log("Dados do formulário:", formData);

		alert("Reserva enviada com sucesso! Em breve entraremos em contato.");

		resetarFormulario();
	};

	return (
		<>
			<h1 className="text-5xl font-bold text-center mt-24">
				Faça sua reserva aqui abaixo:
			</h1>
			<h2 className="text-center text-gray-500 mt-10 text-3xl">
				Reserve um dia conosco e aproveite <br />
				os serviços da Pousada Encanto da Serra
			</h2>
			<form onSubmit={handleSubmit}>
				<div className="w-3/4 mx-auto mt-24 relative">
					{/* Container para a imagem de fundo */}
					<div
						className="absolute overflow-hidden"
						style={{
							top: "-2px",
							left: "-2px",
							right: "-2px",
							bottom: "-2px",
							zIndex: 0,
							borderRadius: "16px",
							background: "linear-gradient(to right, #9333ea, #7e22ce)",
							padding: "2px",
						}}>
						<div className="w-full h-full bg-gray-50 rounded-xl">
							{/* Mantemos a referência à imagem, mas a escondemos visualmente */}
							<div className="hidden">
								<Image
									src={Rectangle}
									alt="Borda decorativa"
									width={1}
									height={1}
								/>
							</div>
						</div>
					</div>

					{/* Conteúdo do formulário */}
					<div className="w-full bg-gray-50 p-8 rounded-xl shadow-lg relative z-10">
						<div className="grid grid-cols-2 gap-8">
							<div className="flex flex-col gap-5 p-5 bg-gray-50 rounded-lg shadow-sm">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="nome-completo"
										className="text-sm font-medium text-black">
										Nome completo
									</label>
									<input
										type="text"
										id="nome-completo"
										placeholder="Insira o nome completo aqui..."
										value={formData.nomeCompleto}
										onChange={handleInputChange}
										className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
										focus:border-purple-500 block w-full p-2.5"
									/>
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="email"
										className="text-sm font-medium text-black">
										Email
									</label>
									<input
										type="email"
										id="email"
										placeholder="algemira@exemplo.com"
										value={formData.email}
										onChange={handleInputChange}
										className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
										focus:border-purple-500 block w-full p-2.5"
									/>
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="telefone"
										className="text-sm font-medium text-black">
										Número de telefone
									</label>
									<input
										type="tel"
										id="telefone"
										placeholder="(DDD) 9 0000-0000"
										value={formData.telefone}
										onChange={handleInputChange}
										className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
										focus:border-purple-500 block w-full p-2.5"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-5 p-5 bg-gray-50 rounded-lg shadow-sm">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="data-entrada"
										className="text-sm font-medium text-black">
										Data de entrada
									</label>
									<input
										type="text"
										id="data-entrada"
										placeholder="01/02/2025"
										value={formData.dataEntrada}
										onChange={handleInputChange}
										className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
										focus:border-purple-500 block w-full p-2.5"
									/>
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="data-saida"
										className="text-sm font-medium text-black">
										Data de saída
									</label>
									<input
										type="text"
										id="data-saida"
										placeholder="05/02/2025 (mínimo 4 dias após entrada)"
										value={formData.dataSaida}
										onChange={handleInputChange}
										className={`bg-white border ${
											formErrors.dataErro ? "border-red-500" : "border-gray-300"
										} text-gray-900 text-sm rounded-lg focus:ring-purple-500
										focus:border-purple-500 block w-full p-2.5`}
									/>
									{formErrors.dataErro && (
										<p className="text-red-500 text-xs mt-1">
											{formErrors.dataErro}
										</p>
									)}
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="qtd-pessoas"
										className="text-sm font-medium text-black">
										Quantidade de pessoas
									</label>
									<div className="flex flex-row items-center">
										<button
											type="button"
											onClick={decrementarPessoas}
											className="bg-purple-600 text-white rounded-l-lg px-3 py-2.5 hover:bg-purple-700">
											-
										</button>
										<input
											type="text"
											id="qtd-pessoas"
											value={formData.qtdPessoas}
											readOnly
											className="bg-white border border-gray-300 text-gray-900 text-sm text-center
											block w-full p-2.5"
										/>
										<button
											type="button"
											onClick={incrementarPessoas}
											className="bg-purple-600 text-white rounded-r-lg px-3 py-2.5 hover:bg-purple-700">
											+
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-8">
							<Button
								type="submit"
								size="lg"
								style={{
									backgroundColor: "purple",
									fontWeight: "bold",
									borderRadius: "30px",
									width: "200px",
								}}>
								Reservar
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default ReservationForm;
