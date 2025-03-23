import sequelize from "./db";
import Reservation from "./models/Reservation";

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");

		await sequelize.sync({ force: true });
		console.log("✅ Modelos sincronizados com o banco de dados!");

		try {
			const reservaTeste = await Reservation.create({
				nomeCompleto: "Usuário Teste",
				email: "teste@example.com",
				telefone: "(11) 99999-9999",
				dataEntrada: "01/04/2025",
				dataSaida: "05/04/2025",
				qtdPessoas: 2,
			});
			console.log(
				"✅ Reserva de teste criada com sucesso! ID:",
				reservaTeste.id
			);
		} catch (error) {
			console.error("❌ Erro ao criar reserva de teste:", error);
		}

		process.exit(0);
	} catch (error) {
		console.error("❌ Erro ao conectar com o banco de dados:", error);
		process.exit(1);
	}
};

testConnection();
