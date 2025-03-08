import Footer from "@/components/Footer";
import HotelBanner from "@/components/HotelBanner";
import { Datepicker } from "flowbite-react";
import CardRooms from "@/components/CardRooms";
import "../pages/_app";
import ReservationForm from "@/components/ReservationForm";
import About from "@/components/About";
import Comments from "@/components/Comments";
export default function Home() {
	return (
		<>
			<Datepicker
				language="pt-BR"
				className="w-60 top-10 z-10"
			/>
			<HotelBanner />
			<CardRooms />
			<About />
			<Comments />
			<ReservationForm />
			<Footer />
		</>
	);
}
