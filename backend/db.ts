import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Configuração do Sequelize com logging detalhado e aumento de timeout
const sequelize = new Sequelize({
	dialect: "postgres",
	host: process.env.DB_HOST || "localhost",
	port: parseInt(process.env.DB_PORT || "5432"),
	username: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "Colorido@70",
	database: process.env.DB_NAME || "reservations",
	logging: false,
	dialectOptions: {
		connectTimeout: 60000, // Aumento do timeout para 60 segundos
		// Configurações SSL desativadas para desenvolvimento local
		ssl: false,
	},
	pool: {
		max: 5, // Máximo de conexões no pool
		min: 0, // Mínimo de conexões no pool
		acquire: 30000, // Tempo limite para obter uma conexão (ms)
		idle: 10000, // Tempo máximo que uma conexão pode ficar ociosa (ms)
	},
	retry: {
		max: 3, // Número máximo de tentativas de reconexão
	},
});

export default sequelize;
