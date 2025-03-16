import Footer from "@/components/Footer";
import HotelBanner from "@/components/HotelBanner";
import { Datepicker } from "flowbite-react";
import CardRooms from "@/components/CardRooms";
import "../pages/_app";
import ReservationForm from "@/components/ReservationForm";
import About from "@/components/About";
import Comments from "@/components/Comments";
import Address from "@/components/Address";
export default function Home() {
	return (
		<>
			<div className="relative">
				<div className="absolute top-10 left-10 z-50">
					<Datepicker
						language="pt-BR"
						className="w-60"
					/>
				</div>
				<HotelBanner />
			</div>
			<CardRooms />
			<About />
			<Comments />
			<ReservationForm />
			<Address />
			<Footer />
		</>
	);
}
