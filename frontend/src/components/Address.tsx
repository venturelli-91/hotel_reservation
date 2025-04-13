import Image from "next/image";
import React from "react";
import Map from "../../public/assets/marco/mapa.png";

export default function Address() {
	return (
		<>
			<h1 className="text-6xl font-montserrat font-bold text-center my-20">
				Localização
			</h1>
			<div className="flex justify-center">
				<Image
					src={Map}
					alt="Mapa"
				/>
			</div>
		</>
	);
}
