import React from "react";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";

const ReservationForm = () => {
	return (
		<>
			<Card>
				<div className="mb-5 ">
					<label
						htmlFor="base-input"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Base input
					</label>
					<div className="flex justify-center items-center">
						<input
							type="text"
							id="base-input"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
					</div>
					<div className="flex justify-center items-center">
						<Button>Reservar</Button>
					</div>
				</div>
			</Card>
		</>
	);
};

export default ReservationForm;
