import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
	const handleLinkedinClick = () => {
		window.open("https://www.linkedin.com/in/aurelioventurelli/", "_blank");
	};

	const handleGithubClick = () => {
		window.open("https://github.com/venturelli-91", "_blank");
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "20vh",
				}}>
				<FlowbiteFooter
					container
					style={{
						marginTop: "auto",
						backgroundColor: "purple",
						color: "yellow",
					}}>
					<FlowbiteFooter.Copyright
						href="#"
						by="Pousada Encanto da Serra"
						year={2025}
						style={{ color: "white", fontWeight: "bold" }}
					/>
					<FlowbiteFooter.LinkGroup>
						<FlowbiteFooter.Link
							href="#"
							className="mr-4 mt-2 font-bold">
							Contato
						</FlowbiteFooter.Link>
						<FlowbiteFooter.Link
							href="#"
							className="mr-4 mt-2 font-bold">
							Localização
						</FlowbiteFooter.Link>
						<FlowbiteFooter.Link
							href="#"
							className="mr-4 mt-2 font-bold">
							Quartos
						</FlowbiteFooter.Link>
						<div className="flex gap-4">
							<BsLinkedin
								size={30}
								onClick={handleLinkedinClick}
								className="cursor-pointer"
							/>
							<BsGithub
								size={30}
								onClick={handleGithubClick}
								className="cursor-pointer"
							/>
						</div>
					</FlowbiteFooter.LinkGroup>
				</FlowbiteFooter>
			</div>
		</>
	);
};

export default Footer;
