import sequelize from "./db";
import { Suite, Review, SavedSuite, Reservation } from "./models";

const setupDatabase = async () => {
	try {
		// Testar a conexão com o banco de dados
		await sequelize.authenticate();
		console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");

		// Recriar as tabelas (isso vai dropar todas as tabelas existentes e recriar)
		await sequelize.sync({ force: true });

		// Criar algumas suítes de amostra
		const suites = await Suite.bulkCreate([
			{
				name: "Suíte Essencial",
				type: "essencial",
				description:
					"A Suíte Essencial oferece conforto e praticidade para sua estadia. Com decoração minimalista e elegante, é perfeita para viajantes que buscam qualidade com bom custo-benefício.",
				price: 280.0,
				capacity: 2,
				features: [
					"Wi-Fi de alta velocidade",
					"Ar-condicionado",
					"TV LED 42 polegadas",
					"Frigobar",
					"Chuveiro com aquecimento a gás",
					"Roupa de cama e banho premium",
				],
				images: [
					"/images/suites/essencial/essencial-1.jpg",
					"/images/suites/essencial/essencial-2.jpg",
					"/images/suites/essencial/essencial-3.jpg",
					"/images/suites/essencial/essencial-4.jpg",
				],
			},
			{
				name: "Suíte Premium",
				type: "premium",
				description:
					"A Suíte Premium combina sofisticação e conforto excepcional. Com espaços amplos e decoração elegante, oferece uma experiência superior com vários diferenciais para tornar sua estadia memorável.",
				price: 450.0,
				capacity: 2,
				features: [
					"Wi-Fi de alta velocidade",
					"Ar-condicionado digital",
					"Smart TV 50 polegadas",
					"Frigobar abastecido",
					"Banheira de hidromassagem",
					"Roupa de cama e banho premium",
					"Máquina de café espresso",
					"Área de estar separada",
					"Vista panorâmica da cidade",
				],
				images: [
					"/images/suites/premium/premium-1.jpg",
					"/images/suites/premium/premium-2.jpg",
					"/images/suites/premium/premium-3.jpg",
					"/images/suites/premium/premium-4.jpg",
				],
			},
			{
				name: "Suíte Executiva",
				type: "executiva",
				description:
					"A Suíte Executiva representa o ápice do luxo e conforto. Com design exclusivo e acabamentos premium, oferece uma experiência incomparável com serviços personalizados e amenidades de primeira linha.",
				price: 680.0,
				capacity: 3,
				features: [
					"Wi-Fi de alta velocidade",
					"Ar-condicionado digital com controle de temperatura por zonas",
					"Smart TV 65 polegadas",
					"Sistema de som premium",
					"Minibar premium completo",
					"Jacuzzi com cromoterapia",
					"Chuveiro com sistema de hidromassagem",
					"Roupas de cama e banho de alta linha",
					"Máquina de café espresso profissional",
					"Sala de estar separada com sofá",
					"Área de trabalho ergonômica",
					"Serviço de mordomo privativo",
					"Vista panorâmica privilegiada",
					"Tratamento de spa complementar",
				],
				images: [
					"/images/suites/executiva/executiva-1.jpg",
					"/images/suites/executiva/executiva-2.jpg",
					"/images/suites/executiva/executiva-3.jpg",
					"/images/suites/executiva/executiva-4.jpg",
				],
			},
		]);

		console.log("✅ Suítes de amostra criadas com sucesso!");

		// Criar algumas avaliações de exemplo
		await Review.bulkCreate([
			{
				suiteId: 1,
				userName: "João Silva",
				rating: 4,
				comment: "Ótima suíte, confortável e limpa. Recomendo!",
				userIp: "192.168.1.1",
			},
			{
				suiteId: 2,
				userName: "Maria Oliveira",
				rating: 5,
				comment:
					"Experiência incrível! Tudo perfeito, desde o atendimento até as instalações.",
				userIp: "192.168.1.2",
			},
			{
				suiteId: 3,
				userName: "Pedro Santos",
				rating: 5,
				comment: "Suíte executiva simplesmente espetacular. Vale cada centavo!",
				userIp: "192.168.1.3",
			},
		]);

		console.log("✅ Avaliações de teste criadas com sucesso!");

		// Criar algumas reservas de exemplo
		await Reservation.bulkCreate([
			{
				suiteId: 1,
				checkIn: "2025-05-10",
				checkOut: "2025-05-15",
				guests: 2,
				userIp: "192.168.1.1",
				status: "confirmada",
			},
			{
				suiteId: 2,
				checkIn: "2025-06-05",
				checkOut: "2025-06-10",
				guests: 2,
				userIp: "192.168.1.2",
				status: "pendente",
			},
			{
				suiteId: 3,
				checkIn: "2025-07-15",
				checkOut: "2025-07-20",
				guests: 3,
				userIp: "192.168.1.3",
				status: "confirmada",
			},
		]);

		console.log("✅ Reservas de teste criadas com sucesso!");
	} catch (error) {
		console.error("❌ Erro durante a configuração do banco de dados:", error);
	} finally {
		// Aqui não vamos fechar a conexão, pois o servidor precisa dela
	}
};

setupDatabase();
