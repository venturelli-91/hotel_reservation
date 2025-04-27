import { Client } from "pg";

// Configuração de conexão
interface DbConfig {
	host: string;
	port: number;
	user: string;
	password: string;
	database: string;
}

const config: DbConfig = {
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "Colorido@70",
	database: "reservations",
};

console.log(
	"Configuração de conexão:",
	JSON.stringify(config, null, 2).replace(
		/"password":"[^"]*"/,
		'"password":"***"'
	)
);
console.log("Tentando conectar ao PostgreSQL...");

const client = new Client(config);

// Eventos para capturar possíveis problemas
client.on("error", (err: Error) => {
	console.error("Erro no cliente:", err);
});

client
	.connect()
	.then(() => {
		console.log("Conexão estabelecida com sucesso!");
		return client.query(
			"SELECT NOW() as current_time, current_database() as database, version() as version"
		);
	})
	.then((result) => {
		console.log("Informações do banco de dados:");
		console.log("- Horário atual:", result.rows[0].current_time);
		console.log("- Banco de dados:", result.rows[0].database);
		console.log("- Versão:", result.rows[0].version);
	})
	.catch((err: any) => {
		console.error("Erro de conexão detalhado:");
		console.error("- Código:", err.code);
		console.error("- Mensagem:", err.message);
		console.error("- Detalhes:", err.detail || "Nenhum detalhe adicional");
	})
	.finally(() => {
		console.log("Finalizando conexão...");
		client.end().then(() => console.log("Conexão finalizada"));
	});
