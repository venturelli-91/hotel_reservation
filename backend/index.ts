import express, { Request, Response, NextFunction, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db";
import { Suite, Reservation, Review, SavedSuite } from "./models";
import { Op } from "sequelize";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

dotenv.config();

// Estender a interface Request para incluir userIp
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

// Middleware para capturar o IP do usuário
const captureIp = (req: Request, res: Response, next: NextFunction) => {
	// Em produção, isso seria configurado para pegar o IP real
	// Aqui usamos o IP de forwarded ou o IP remoto ou um valor padrão
	req.userIp =
		(req.headers["x-forwarded-for"] as string) ||
		req.connection.remoteAddress ||
		"127.0.0.1";

	next();
};

app.use(captureIp);

// Rotas para Suítes
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

		// Verificar se o usuário salvou esta suíte
		const savedSuite = await SavedSuite.findOne({
			where: {
				suiteId: suite.id,
				userIp: req.userIp,
			},
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

// Rotas para Favoritos (SavedSuite)
// @ts-ignore
router.post("/saved-suites", async (req: Request, res: Response) => {
	try {
		const { suiteId, isSaved } = req.body;
		const userIp = req.userIp;

		// Verificar se já existe um registro para este suiteId e userIp
		const existingSaved = await SavedSuite.findOne({
			where: { suiteId, userIp },
		});

		if (existingSaved) {
			// Atualiza o registro existente
			existingSaved.isSaved = isSaved;
			await existingSaved.save();
			return res.status(200).json(existingSaved);
		}

		// Cria um novo registro
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
			where: {
				userIp,
				isSaved: true,
			},
			include: [{ model: Suite }],
		});

		res.status(200).json(savedSuites);
	} catch (error) {
		console.error("Erro ao buscar suítes salvas:", error);
		res.status(500).json({ message: "Erro ao buscar suítes salvas" });
	}
});

// Rotas para Reservas
// @ts-ignore
router.post("/reservations", async (req: Request, res: Response) => {
	try {
		const reservation = await Reservation.create(req.body);
		res.status(201).json(reservation);
	} catch (error) {
		console.error("Erro:", error);
		res.status(500).json({ message: "Erro ao processar a reserva" });
	}
});

// @ts-ignore
router.get("/reservations", async (req: Request, res: Response) => {
	try {
		const reservations = await Reservation.findAll({
			include: [{ model: Suite }],
		});
		res.status(200).json(reservations);
	} catch (error) {
		console.error("Erro ao buscar reservas:", error);
		res.status(500).json({ message: "Erro ao buscar reservas" });
	}
});

// @ts-ignore
router.get("/reservations/:id", async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const reservation = await Reservation.findByPk(id, {
			include: [{ model: Suite }],
		});

		if (!reservation) {
			return res.status(404).json({ message: "Reserva não encontrada" });
		}

		res.status(200).json(reservation);
	} catch (error) {
		console.error("Erro ao buscar reserva:", error);
		res.status(500).json({ message: "Erro ao buscar reserva" });
	}
});

// Rotas para Avaliações
// @ts-ignore
router.post("/reviews", async (req: Request, res: Response) => {
	try {
		const reviewData = {
			...req.body,
			userIp: req.userIp,
		};

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

// Registrar as rotas com o prefixo /api
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
