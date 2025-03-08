import React from "react";
import { Button, Card } from "flowbite-react";

const ReservationForm = () => {
	return (
		<>
			<h1 className="text-5xl font-bold text-center mt-24">
				Faça sua reserva aqui abaixo:
			</h1>
			<h2 className="text-center text-gray-500 mt-10 text-3xl">
				Reserve um dia conosco e aproveite <br />
				os serviços da Pousada Encanto da Serra
			</h2>
			<div className="flex flex-row gap-5 justify-center items-center w-1/2 mx-auto mt-24 bg-gray-100 p-5 rounded-2xl shadow-lg">
				<div className="flex flex-col gap-5">
					<Card className="flex flex-col gap-5">
						<input
							type="text"
							id="base-input-1"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						<input
							type="text"
							id="base-input-2"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						<input
							type="text"
							id="base-input-3"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
					</Card>
				</div>
				<div className="flex flex-col gap-5">
					<Card>
						<input
							type="text"
							id="base-input-4"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						<input
							type="text"
							id="base-input-5"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						<input
							type="text"
							id="base-input-6"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
					</Card>
				</div>
				<div className="flex justify-center items-center w-1/4">
					<Button>Reservar</Button>
				</div>
			</div>
		</>
	);
};

export default ReservationForm;
