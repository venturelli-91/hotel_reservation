import React from "react";
import Layout from "@/components/Layout";
import ReservationList from "../components/ReservationList";

const MinhasReservasPage: React.FC = () => {
	return (
		<Layout>
			<div className="max-w-4xl mx-auto py-8 px-4">
				<h1 className="text-3xl font-bold mb-8">Minhas Reservas</h1>
				<ReservationList />
			</div>
		</Layout>
	);
};

export default MinhasReservasPage;
