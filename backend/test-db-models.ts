import { Sequelize, QueryTypes } from "sequelize";

// Interface para representar uma suíte
interface Suite {
	id: number;
	name: string;
	type: string;
	description: string;
	price: number;
	capacity: number;
	features: string[];
	images: string[];
	createdAt: Date;
	updatedAt: Date;
}

interface Reservation {
	id: number;
	suiteId: number;
	checkIn: string;
	checkOut: string;
	guests: number;
	userIp: string;
	status: string;
	createdAt: Date;
	updatedAt: Date;
}

async function testDatabase(): Promise<void> {
	try {
		const sequelize = new Sequelize({
			dialect: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "Colorido@70",
			database: "reservations",
			logging: false,
		});

		await sequelize.authenticate();
		console.log("✅ Conexão ao banco de dados estabelecida com sucesso");

		const tables = await sequelize.query<{ tablename: string }>(
			`SELECT tablename FROM pg_catalog.pg_tables
      WHERE schemaname = 'public'
      ORDER BY tablename;`,
			{ type: QueryTypes.SELECT }
		);

		console.log("\n📋 Tabelas existentes no banco de dados:");
		if (tables.length === 0) {
			console.log("   Nenhuma tabela encontrada");
		} else {
			tables.forEach((row) => {
				console.log(`   - ${row.tablename}`);
			});
		}

		try {
			const suites = await sequelize.query<Suite>(
				"SELECT * FROM suites LIMIT 5",
				{ type: QueryTypes.SELECT }
			);

			console.log("\n🏨 Suítes cadastradas:", suites.length);

			if (suites.length > 0) {
				console.log("   - Exemplo: ID:", suites[0].id, "Nome:", suites[0].name);
			}
		} catch (error: any) {
			console.log("\n❌ Erro ao consultar suítes:", error.message);
		}

		try {
			const reservations = await sequelize.query<Reservation>(
				"SELECT * FROM reservations LIMIT 5",
				{ type: QueryTypes.SELECT }
			);

			console.log("\n📅 Reservas cadastradas:", reservations.length);

			if (reservations.length > 0) {
				console.log(
					"   - Exemplo: ID:",
					reservations[0].id,
					"Check-in:",
					reservations[0].checkIn,
					"Status:",
					reservations[0].status
				);
			}
		} catch (error: any) {
			console.log("\n❌ Erro ao consultar reservas:", error.message);
		}

		await sequelize.close();
		console.log("\n✅ Teste concluído com sucesso");
	} catch (error: any) {
		console.error("❌ Erro no teste do banco de dados:");
		console.error(`   ${error.message}`);

		if (error.original) {
			console.error("\nDetalhes do erro:");
			console.error(`   Código: ${error.original.code}`);
			console.error(`   Mensagem: ${error.original.message}`);
		}
	}
}

console.log("🔍 Iniciando teste do banco de dados...\n");
testDatabase();
