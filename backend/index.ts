import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db";
import Reservation from "./models/Reservation";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
app.use(express.json());

app.post("/api/reservations", async (req, res) => {
	try {
		const reservation = await Reservation.create(req.body);
		res.status(201).json(reservation);
	} catch (error) {
		console.error("Erro:", error);
		res.status(500).json({ message: "Erro ao processar a reserva" });
	}
});

const startServer = async () => {
	try {
		await sequelize.sync();
		console.log("Conexão com o banco de dados estabelecida com sucesso");

		app.listen(PORT, () => {
			console.log(`Servidor rodando na porta ${PORT}`);
		});
	} catch (error) {
		console.error("Erro ao conectar ao banco de dados:", error);
	}
};

startServer();
