import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
	dialect: "postgres",
	host: process.env.DB_HOST || "localhost",
	port: parseInt(process.env.DB_PORT || "5432"),
	username: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "Colorido@70",
	database: process.env.DB_NAME || "reservations",
	logging: false,
	dialectOptions: {
		connectTimeout: 60000,
		ssl: false,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	retry: {
		max: 3,
	},
});

export default sequelize;
