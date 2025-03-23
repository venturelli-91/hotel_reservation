import sequelize from "./db";

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");

		await sequelize.sync({ force: true });
		console.log("✅ Modelos sincronizados com o banco de dados!");

		process.exit(0);
	} catch (error) {
		console.error("❌ Erro ao conectar com o banco de dados:", error);
		process.exit(1);
	}
};

testConnection();
