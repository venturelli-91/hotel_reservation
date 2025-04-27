import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models";

const JWT_SECRET = process.env.JWT_SECRET || "chave_secreta_do_aplicativo";

declare global {
	namespace Express {
		interface Request {
			userId?: number;
			user?: any;
		}
	}
}

export const authenticate = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader) {
			res.status(401).json({ message: "Token de autenticação não fornecido" });
			return;
		}

		const [bearer, token] = authHeader.split(" ");

		if (bearer !== "Bearer" || !token) {
			res.status(401).json({ message: "Formato de token inválido" });
			return;
		}

		try {
			const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

			req.userId = decoded.userId;

			const user = await User.findByPk(decoded.userId);

			if (!user) {
				res.status(401).json({ message: "Usuário não encontrado" });
				return;
			}

			req.user = user;

			next();
		} catch (error) {
			res.status(401).json({ message: "Token inválido ou expirado" });
		}
	} catch (error) {
		console.error("Erro na autenticação:", error);
		res.status(500).json({ message: "Erro interno do servidor" });
	}
};

export const isAdmin = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if (req.user && req.user.role === "admin") {
		next();
	} else {
		res.status(403).json({
			message: "Acesso negado. Permissão de administrador necessária",
		});
	}
};
