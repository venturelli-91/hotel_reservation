import express, { Request, Response, NextFunction, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db";
import { Suite, Review, SavedSuite, Reservation, User } from "./models";
import authRoutes from "./routes/authRoutes";

dotenv.config();

declare global {
	namespace Express {
		interface Request {
			userIp: string;
		}
	}
}

const app = express();
const router = Router();
const PORT = process.env.PORT || 3001;

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
app.use(express.json());

const captureIp = (req: Request, res: Response, next: NextFunction) => {
	req.userIp =
		(req.headers["x-forwarded-for"] as string) ||
		req.socket.remoteAddress ||
		"127.0.0.1";
	next();
};
app.use(captureIp);

app.use("/api/auth", authRoutes);

// @ts-ignore
router.get("/suites", async (req: Request, res: Response) => {
	try {
		const suites = await Suite.findAll();
		res.status(200).json(suites);
	} catch (error) {
		console.error("Erro ao buscar suítes:", error);
		res.status(500).json({ message: "Erro ao buscar suítes" });
	}
});

// @ts-ignore
router.get("/suites/:type", async (req: Request, res: Response) => {
	try {
		const { type } = req.params;
		const suite = await Suite.findOne({
			where: { type },
			include: [
				{
					model: Review,
					as: "reviews",
					limit: 5,
					order: [["createdAt", "DESC"]],
				},
			],
		});

		if (!suite) {
			return res.status(404).json({ message: "Suíte não encontrada" });
		}

		const savedSuite = await SavedSuite.findOne({
			where: { suiteId: suite.id, userIp: req.userIp },
		});

		res.status(200).json({
			...suite.toJSON(),
			isSaved: !!savedSuite,
		});
	} catch (error) {
		console.error("Erro ao buscar suíte:", error);
		res.status(500).json({ message: "Erro ao buscar suíte" });
	}
});

// @ts-ignore
router.post("/saved-suites", async (req: Request, res: Response) => {
	try {
		const { suiteId, isSaved } = req.body;
		const userIp = req.userIp;

		const existingSaved = await SavedSuite.findOne({
			where: { suiteId, userIp },
		});

		if (existingSaved) {
			existingSaved.isSaved = isSaved;
			await existingSaved.save();
			return res.status(200).json(existingSaved);
		}

		const savedSuite = await SavedSuite.create({
			suiteId,
			userIp,
			isSaved,
		});

		res.status(201).json(savedSuite);
	} catch (error) {
		console.error("Erro ao salvar/remover suíte:", error);
		res.status(500).json({ message: "Erro ao processar a solicitação" });
	}
});

// @ts-ignore
router.get("/saved-suites", async (req: Request, res: Response) => {
	try {
		const userIp = req.userIp;
		const savedSuites = await SavedSuite.findAll({
			where: { userIp, isSaved: true },
			include: [{ model: Suite }],
		});

		res.status(200).json(savedSuites);
	} catch (error) {
		console.error("Erro ao buscar suítes salvas:", error);
		res.status(500).json({ message: "Erro ao buscar suítes salvas" });
	}
});

// @ts-ignore
router.post("/reviews", async (req: Request, res: Response) => {
	try {
		const reviewData = { ...req.body, userIp: req.userIp };
		const review = await Review.create(reviewData);
		res.status(201).json(review);
	} catch (error) {
		console.error("Erro ao criar avaliação:", error);
		res.status(500).json({ message: "Erro ao processar a avaliação" });
	}
});

// @ts-ignore
router.get("/reviews", async (req: Request, res: Response) => {
	try {
		const { suiteId } = req.query;
		const where = suiteId ? { suiteId } : {};

		const reviews = await Review.findAll({
			where,
			order: [["createdAt", "DESC"]],
			include: [{ model: Suite }],
		});

		res.status(200).json(reviews);
	} catch (error) {
		console.error("Erro ao buscar avaliações:", error);
		res.status(500).json({ message: "Erro ao buscar avaliações" });
	}
});

// @ts-ignore
router.post("/reservations", async (req: Request, res: Response) => {
	try {
		const { suiteId, checkIn, checkOut, guests } = req.body;

		if (!suiteId || !checkIn || !checkOut || !guests) {
			return res.status(400).json({
				message: "Dados incompletos. Todos os campos são obrigatórios.",
			});
		}

		const suite = await Suite.findByPk(suiteId);
		if (!suite) {
			return res.status(404).json({ message: "Suíte não encontrada" });
		}

		const reservation = await Reservation.create({
			suiteId,
			checkIn,
			checkOut,
			guests,
			userIp: req.userIp,
			status: "pendente",
		});

		res.status(201).json(reservation);
	} catch (error) {
		console.error("Erro ao criar reserva:", error);
		res.status(500).json({ message: "Erro ao processar a reserva" });
	}
});

// @ts-ignore
router.get("/reservations", async (req: Request, res: Response) => {
	try {
		const reservations = await Reservation.findAll({
			include: [{ model: Suite }],
			order: [["createdAt", "DESC"]],
		});
		res.status(200).json(reservations);
	} catch (error) {
		console.error("Erro ao buscar reservas:", error);
		res.status(500).json({ message: "Erro ao buscar reservas" });
	}
});

// @ts-ignore
router.get("/reservations/user", async (req: Request, res: Response) => {
	try {
		const userIp = req.userIp;
		const reservations = await Reservation.findAll({
			where: { userIp },
			include: [{ model: Suite }],
			order: [["createdAt", "DESC"]],
		});
		res.status(200).json(reservations);
	} catch (error) {
		console.error("Erro ao buscar reservas do usuário:", error);
		res.status(500).json({ message: "Erro ao buscar suas reservas" });
	}
});

// @ts-ignore
router.delete("/reservations/:id", async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const userIp = req.userIp;

		const reservation = await Reservation.findByPk(id);

		if (!reservation) {
			return res.status(404).json({ message: "Reserva não encontrada" });
		}

		if (reservation.userIp !== userIp) {
			return res.status(403).json({ message: "Acesso não autorizado" });
		}

		reservation.status = "cancelada";
		await reservation.save();

		res.status(200).json({ message: "Reserva cancelada com sucesso" });
	} catch (error) {
		console.error("Erro ao cancelar reserva:", error);
		res.status(500).json({ message: "Erro ao processar a solicitação" });
	}
});

app.use("/api", router);

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
