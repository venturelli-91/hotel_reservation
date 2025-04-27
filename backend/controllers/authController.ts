import { Request, Response } from "express";
import { User } from "../models";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const JWT_SECRET = process.env.JWT_SECRET || "chave_secreta_do_aplicativo";

const generateToken = (userId: number): string => {
	return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
};

export const register = async (req: Request, res: Response): Promise<void> => {
	try {
		const { username, email, password } = req.body;

		const existingUser = await User.findOne({
			where: {
				[Op.or]: [{ username }, { email }],
			},
		});

		if (existingUser) {
			res.status(400).json({
				message: "Usuário ou email já cadastrado",
			});
			return;
		}

		const user = await User.create({
			username,
			email,
			password,
		});

		const token = generateToken(user.id);

		const userData = user.toJSON();
		delete userData.password;

		res.status(201).json({
			message: "Usuário criado com sucesso",
			user: userData,
			token,
		});
	} catch (error) {
		console.error("Erro ao registrar usuário:", error);
		res.status(500).json({
			message: "Erro ao criar usuário",
		});
	}
};

export const login = async (req: Request, res: Response): Promise<void> => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			res.status(400).json({
				message: "Nome de usuário e senha são obrigatórios",
			});
			return;
		}

		try {
			const user = await User.authenticate(username, password);

			const token = generateToken(user.id);

			const userData = user.toJSON();
			delete userData.password;

			res.status(200).json({
				message: "Login realizado com sucesso",
				user: userData,
				token,
			});
		} catch (error) {
			res.status(401).json({
				message: "Credenciais inválidas",
			});
		}
	} catch (error) {
		console.error("Erro no login:", error);
		res.status(500).json({
			message: "Erro interno do servidor",
		});
	}
};

export const getCurrentUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		// @ts-ignore
		const userId = req.userId;

		if (!userId) {
			res.status(401).json({
				message: "Não autenticado",
			});
			return;
		}

		const user = await User.findByPk(userId);

		if (!user) {
			res.status(404).json({
				message: "Usuário não encontrado",
			});
			return;
		}

		const userData = user.toJSON();
		delete userData.password;

		res.status(200).json({
			user: userData,
		});
	} catch (error) {
		console.error("Erro ao buscar usuário atual:", error);
		res.status(500).json({
			message: "Erro interno do servidor",
		});
	}
};
