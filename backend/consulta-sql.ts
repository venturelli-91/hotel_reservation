import sequelize from "./db";

// Consulta e exibe resultados formatados
async function consultarSQL(titulo: string, sql: string) {
	try {
		console.log(`\n===== ${titulo} =====`);
		const [resultados] = await sequelize.query(sql);
		console.log(`Total: ${resultados.length} registro(s)`);

		resultados.forEach((item: any, i: number) => {
			console.log(`\n[${i + 1}]`);
			for (const [chave, valor] of Object.entries(item)) {
				console.log(
					`${chave}: ${
						Array.isArray(valor)
							? `[${valor.join(", ")}]`
							: typeof valor === "object" && valor !== null
							? JSON.stringify(valor)
							: valor
					}`
				);
			}
		});
	} catch (error) {
		console.error(`Erro em "${titulo}":`, error);
	}
}

// Função principal
async function consultarBancoDados() {
	try {
		// Consulta de suítes
		await consultarSQL(
			"SUÍTES",
			`SELECT id, name, type, price, capacity FROM suites ORDER BY id`
		);

		// Consulta de avaliações
		await consultarSQL(
			"AVALIAÇÕES",
			`SELECT r.id, r."userName" as "usuario", r.rating as "nota", 
			 r.comment as "comentario", s.name as "suite" 
			 FROM reviews r JOIN suites s ON r."suiteId" = s.id ORDER BY r.id`
		);

		// Consulta de reservas
		await consultarSQL(
			"RESERVAS",
			`SELECT r.id, r."checkIn" as "entrada", r."checkOut" as "saida", 
			 r.guests as "hospedes", r.status, s.name as "suite"
			 FROM reservations r JOIN suites s ON r."suiteId" = s.id ORDER BY r.id`
		);

		await sequelize.close();
		console.log("\nConsultas concluídas.");
	} catch (error) {
		console.error("Erro:", error);
	} finally {
		process.exit(0);
	}
}

console.log("Consultando dados...");
consultarBancoDados();
