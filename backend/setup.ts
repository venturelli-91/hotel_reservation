import sequelize from "./db";
import { Suite, Review } from "./models";

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");

		await sequelize.sync({ force: true });
		console.log("✅ Modelos sincronizados com o banco de dados!");

		// Criar suítes de teste
		const suites = await Promise.all([
			Suite.create({
				name: "Suíte Essencial",
				type: "essencial",
				description: "Conforto e praticidade para uma estadia agradável",
				price: 250.0,
				capacity: 2,
				features: [
					"Wi-Fi premium",
					"Smart TV 35' 4K",
					"Ar-condicionado digital",
					"Banheira",
					"Cama de casal",
					"Serviço de quarto 24h",
				],
				images: [
					"/assets/abril/Villa.jpeg",
					"/assets/abril/Casa_praia.jpeg",
					"/assets/abril/outdoor_kitchen.jpeg",
				],
			}),
			Suite.create({
				name: "Suíte Premium",
				type: "premium",
				description:
					"Um toque de sofisticação e aconchego, combinando conforto e detalhes elegantes",
				price: 450.0,
				capacity: 3,
				features: [
					"Wi-Fi premium",
					"Smart TV 50' 4K",
					"Ar-condicionado digital",
					"Máquina de café premium",
					"Banheira de hidromassagem",
					"Cama King size",
					"Minibar completo",
					"Serviço de quarto 24h",
				],
				images: [
					"/assets/abril/Villa.jpeg",
					"/assets/abril/Casa_praia.jpeg",
					"/assets/abril/outdoor_kitchen.jpeg",
				],
			}),
			Suite.create({
				name: "Suíte Executiva",
				type: "executiva",
				description:
					"Experiência exclusiva com requinte e comodidades premium para o máximo de conforto",
				price: 650.0,
				capacity: 2,
				features: [
					"Wi-Fi de alta velocidade dedicado",
					'Smart TV 65" OLED com sistema de som',
					"Climatização inteligente",
					"Máquina de café premium e seleção de chás",
					"Banheiro spa com sauna privativa",
					"Cama Super King com colchão premium",
					"Tratamento de spa complementar",
					"Serviço de mordomo privativo",
				],
				images: [
					"/assets/abril/lovely.jpeg",
					"/assets/abril/cafe_manha.jpeg",
					"/assets/abril/Mask group.png",
				],
			}),
		]);

		console.log("✅ Suítes de teste criadas com sucesso!");

		// Criar avaliações de teste
		try {
			await Review.bulkCreate([
				{
					suiteId: suites[0].id,
					userName: "João Silva",
					rating: 4,
					comment: "Ótima suíte, confortável e limpa. Recomendo!",
					userIp: "192.168.1.1",
				},
				{
					suiteId: suites[1].id,
					userName: "Maria Oliveira",
					rating: 5,
					comment:
						"Experiência incrível! Tudo perfeito, desde o atendimento até as instalações.",
					userIp: "192.168.1.2",
				},
				{
					suiteId: suites[2].id,
					userName: "Pedro Santos",
					rating: 5,
					comment:
						"Suíte executiva simplesmente espetacular. Vale cada centavo!",
					userIp: "192.168.1.3",
				},
			]);
			console.log("✅ Avaliações de teste criadas com sucesso!");
		} catch (error) {
			console.error("❌ Erro ao criar avaliações de teste:", error);
		}

		process.exit(0);
	} catch (error) {
		console.error("❌ Erro ao conectar com o banco de dados:", error);
		process.exit(1);
	}
};

testConnection();
