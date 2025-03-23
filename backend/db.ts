import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Configuração do banco de dados PostgreSQL
const sequelize = new Sequelize({
	dialect: "postgres",
	host: process.env.DB_HOST || "localhost",
	port: parseInt(process.env.DB_PORT || "5432"),
	username: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "postgres",
	database: process.env.DB_NAME || "reservations",
	logging: false,
});

export default sequelize;
