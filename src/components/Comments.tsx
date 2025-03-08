import React from "react";
import Image from "next/image";
import Img1 from "../../public/assets/Tiro médio da mulher do smiley que levanta _ Foto Grátis.png";
import Img2 from "../../public/assets/Vector 5.png";
import Img3 from "../../public/assets/Group 1.png";
import { Card } from "flowbite-react";

const Comments = () => {
	return (
		<>
			<h1 className="text-4xl font-extrabold my-20">
				Depoimentos de nossos clientes
			</h1>
			<div className="flex flex-col items-center justify-center">
				<Card>
					<div>
						<Image
							src={Img1}
							alt="Imagem 1"
							layout="responsive"
							objectFit="cover"
						/>
					</div>
				</Card>
				<Card>
					<div>
						<Image
							src={Img2}
							alt="Vector"
							layout="responsive"
							objectFit="cover"
						/>
					</div>
				</Card>
				<Card>
					<div>
						<Image
							src={Img3}
							alt="Group 1"
							layout="responsive"
							objectFit="cover"
						/>
					</div>
				</Card>
			</div>
		</>
	);
};

export default Comments;
