import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img1 from "../../public/assets/marco/Tiro médio da mulher do smiley que levanta _ Foto Grátis.png";
import Img3 from "../../public/assets/marco/Group 1.png";
import Vector from "../../public/assets/marco/Vector 5.png";
import {
	Card,
	Rating,
	Button,
	Label,
	TextInput,
	Textarea,
} from "flowbite-react";
import { reviewsApi } from "../services/api";
import { useRouter } from "next/router";

interface Review {
	id: number;
	userName: string;
	rating: number;
	comment: string;
	createdAt: string;
	suiteId: number;
}

interface CommentsProps {
	suiteId?: number;
}

const Comments: React.FC<CommentsProps> = ({ suiteId }) => {
	const [reviews, setReviews] = useState<Review[]>([]);
	const [loading, setLoading] = useState(true);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		userName: "",
		rating: 5,
		comment: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const router = useRouter();
	const currentSuiteId =
		suiteId ||
		(router.query.type ? parseInt(router.query.type as string) : undefined);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				setLoading(true);
				const data = await reviewsApi.getAll(currentSuiteId);
				setReviews(data);
			} catch (err) {
				console.error("Erro ao carregar avaliações:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchReviews();
	}, [currentSuiteId]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleRatingChange = (value: number) => {
		setFormData((prev) => ({ ...prev, rating: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.userName.trim() || !formData.comment.trim()) {
			setError("Por favor, preencha todos os campos");
			return;
		}

		if (!currentSuiteId) {
			setError("ID da suíte não encontrado");
			return;
		}

		try {
			setSubmitting(true);
			setError("");

			await reviewsApi.create({
				suiteId: currentSuiteId,
				userName: formData.userName,
				rating: formData.rating,
				comment: formData.comment,
			});

			// Recarregar avaliações
			const updatedReviews = await reviewsApi.getAll(currentSuiteId);
			setReviews(updatedReviews);

			// Resetar o formulário
			setFormData({
				userName: "",
				rating: 5,
				comment: "",
			});

			setSuccess("Avaliação enviada com sucesso!");
			setShowForm(false);

			// Limpar mensagem de sucesso após 3 segundos
			setTimeout(() => {
				setSuccess("");
			}, 3000);
		} catch (err) {
			console.error("Erro ao enviar avaliação:", err);
			setError(
				"Ocorreu um erro ao enviar sua avaliação. Tente novamente mais tarde."
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<div className="flex justify-center items-center w-full">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-4xl font-extrabold my-10">
						Depoimentos de nossos clientes
					</h1>
					<Image
						src={Vector}
						alt="About"
						width={100}
						height={100}
						style={{
							filter:
								"brightness(0) saturate(100%) invert(19%) sepia(90%) saturate(5049%) hue-rotate(289deg) brightness(77%) contrast(125%)",
						}}
					/>
				</div>
			</div>

			{/* Mostrar mensagens de erro/sucesso */}
			{error && (
				<div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
					{error}
				</div>
			)}

			{success && (
				<div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
					{success}
				</div>
			)}

			{/* Botão para mostrar o formulário */}
			<div className="flex justify-center my-8">
				<Button
					color="purple"
					onClick={() => setShowForm(!showForm)}>
					{showForm ? "Cancelar" : "Adicionar Avaliação"}
				</Button>
			</div>

			{/* Formulário de avaliação */}
			{showForm && (
				<div className="max-w-2xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-md">
					<h2 className="text-xl font-bold mb-4">Deixe sua avaliação</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<Label
								htmlFor="userName"
								value="Seu nome"
							/>
							<TextInput
								id="userName"
								name="userName"
								value={formData.userName}
								onChange={handleInputChange}
								placeholder="Digite seu nome"
								required
							/>
						</div>

						<div className="mb-4">
							<Label value="Sua avaliação" />
							<div className="flex items-center">
								<Rating>
									{[1, 2, 3, 4, 5].map((star) => (
										<Rating.Star
											key={star}
											filled={formData.rating >= star}
											onClick={() => handleRatingChange(star)}
										/>
									))}
								</Rating>
								<span className="ml-2">{formData.rating} de 5</span>
							</div>
						</div>

						<div className="mb-4">
							<Label
								htmlFor="comment"
								value="Seu comentário"
							/>
							<Textarea
								id="comment"
								name="comment"
								value={formData.comment}
								onChange={handleInputChange}
								placeholder="Compartilhe sua experiência..."
								rows={4}
								required
							/>
						</div>

						<Button
							type="submit"
							color="purple"
							disabled={submitting}>
							{submitting ? "Enviando..." : "Enviar Avaliação"}
						</Button>
					</form>
				</div>
			)}

			{/* Lista de avaliações */}
			<div className="flex mt-8 gap-4 flex-wrap justify-center items-stretch">
				{loading ? (
					<p className="text-center">Carregando avaliações...</p>
				) : reviews.length > 0 ? (
					reviews.map((review) => (
						<Card
							key={review.id}
							className="w-full md:w-1/3 rounded-lg"
							style={{ backgroundColor: "purple" }}>
							<div className="flex flex-col">
								<div className="flex items-center mb-2">
									<span className="text-white font-bold mr-2">
										{review.userName}
									</span>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<span
												key={i}
												className="text-yellow-300 text-lg">
												{i < review.rating ? "★" : "☆"}
											</span>
										))}
									</div>
								</div>
								<p className="text-white font-sans text-sm mb-2">
									&quot;{review.comment}&quot;
								</p>
								<span className="text-white text-xs">
									{new Date(review.createdAt).toLocaleDateString("pt-BR")}
								</span>
							</div>
						</Card>
					))
				) : (
					<>
						<Card
							className="w-full md:w-1/3 rounded-full"
							style={{ backgroundColor: "purple" }}>
							<div className="flex flex-row items-center justify-center">
								<Image
									src={Img1}
									alt="Imagem 1"
								/>
								<div className="flex flex-col p-5">
									<span className="text-white font-sans text-sm mb-2">
										&quot;Uma experiência incrível! O lugar é super
										aconchegante, perfeito para relaxar e curtir a natureza. O
										café da manhã caseiro é um espetáculo à parte! Com certeza
										voltarei.&quot;
									</span>
									<span className="text-white font-sans font-bold text-sm">
										Mariana R.
									</span>
								</div>
							</div>
						</Card>
						<Card
							className="w-full md:w-1/3 rounded-full"
							style={{ backgroundColor: "purple" }}>
							<div className="flex flex-row items-center justify-center">
								<Image
									src={Img3}
									alt="Group 1"
								/>
								<div className="flex flex-col p-5">
									<span className="text-white font-sans text-sm mb-2">
										&quot; A pousada é um verdadeiro refúgio! Quartos
										confortáveis, atendimento impecável e uma vista maravilhosa.
										Passamos dias inesquecíveis aqui!&quot;
									</span>
									<span className="text-white font-sans font-bold text-sm">
										Lucas M.
									</span>
								</div>
							</div>
						</Card>
					</>
				)}
			</div>
		</>
	);
};

export default Comments;
