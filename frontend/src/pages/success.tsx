import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FaCheckCircle, FaHome } from "react-icons/fa";

const SuccessPage = () => {
	return (
		<>
			<Head>
				<title>Reserva Confirmada | Hotel Paradise</title>
			</Head>

			<div className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
				<div className="bg-white shadow-lg rounded-lg p-12 text-center w-full max-w-2xl">
					<FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

					<h1 className="text-3xl font-bold mb-4">Reserva Confirmada!</h1>

					<p className="text-xl text-gray-700 mb-8">
						Sua reserva foi realizada com sucesso. Em breve você receberá um
						e-mail com todos os detalhes da sua estadia.
					</p>

					<div className="mb-8 bg-gray-50 p-6 rounded-lg">
						<h2 className="text-xl font-bold mb-4">Próximos Passos</h2>
						<ul className="text-left space-y-2">
							<li className="flex items-start">
								<span className="text-purple-700 mr-2">1.</span>
								<span>
									Verifique seu e-mail para os detalhes da confirmação
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-purple-700 mr-2">2.</span>
								<span>
									Apresente o comprovante da reserva na recepção do hotel
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-purple-700 mr-2">3.</span>
								<span>
									Aproveite sua estadia com todo o conforto que preparamos para
									você
								</span>
							</li>
						</ul>
					</div>

					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link
							href="/"
							className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
							<FaHome /> Voltar para a Página Inicial
						</Link>

						<Link
							href="/rooms"
							className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
							Ver mais Suítes
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SuccessPage;
