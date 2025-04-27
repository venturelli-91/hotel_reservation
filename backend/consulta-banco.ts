import { Suite, Review, Reservation } from "./models";

// Consulta modelos através do Sequelize
async function consultarDados() {
	try {
		// Consultar suítes
		const suites = await Suite.findAll();
		console.log("\n===== SUÍTES =====");
		console.log(`Total: ${suites.length} suíte(s)`);

		suites.forEach((suite) => {
			console.log(`\n[ID: ${suite.id}] ${suite.name}`);
			console.log(`Tipo: ${suite.type}`);
			console.log(`Preço: R$ ${suite.price}`);
			console.log(`Capacidade: ${suite.capacity} pessoa(s)`);
		});

		// Consultar avaliações
		const reviews = await Review.findAll({
			include: [{ model: Suite, attributes: ["name"] }],
		});

		console.log("\n===== AVALIAÇÕES =====");
		console.log(`Total: ${reviews.length} avaliação(ões)`);

		reviews.forEach((review) => {
			const data = review.get({ plain: true }) as any;
			console.log(`\n[ID: ${review.id}] Nota: ${review.rating}★`);
			console.log(`Usuário: ${review.userName}`);
			console.log(`Suíte: ${data.Suite?.name || "N/A"}`);
			console.log(`Comentário: ${review.comment}`);
		});

		// Consultar reservas
		const reservations = await Reservation.findAll({
			include: [{ model: Suite, attributes: ["name"] }],
		});

		console.log("\n===== RESERVAS =====");
		console.log(`Total: ${reservations.length} reserva(s)`);

		reservations.forEach((reservation) => {
			const data = reservation.get({ plain: true }) as any;
			console.log(`\n[ID: ${reservation.id}] Status: ${reservation.status}`);
			console.log(`Suíte: ${data.Suite?.name || "N/A"}`);
			console.log(`Check-in: ${reservation.checkIn}`);
			console.log(`Check-out: ${reservation.checkOut}`);
			console.log(`Hóspedes: ${reservation.guests}`);
		});

		console.log("\nConsulta finalizada com sucesso.");
		process.exit(0);
	} catch (error) {
		console.error("Erro na consulta:", error);
		process.exit(1);
	}
}

console.log("Consultando banco de dados...");
consultarDados();
