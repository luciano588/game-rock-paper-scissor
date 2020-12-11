import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbtron";
import { Card } from "./card";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const data = [
	{
		cardTitle: "Rio de Janeiro",
		cardDescription:
			" Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. ",
		cardImg:
			"https://s1.travix.com/so/south-america-brasil-rio-de-janeiro-beach-sunset-medium.jpg"
	},
	{
		cardTitle: "Miami Beach",
		cardDescription:
			" Miami, officially the City of Miami, is a metropolis located in southeastern Florida in the United States. It is the third most populous metropolis on the East coast of the United States, and it is the seventh largest in the country",
		cardImg:
			"https://static.rentcars.com/imagens/modules/localidade/about/519-desktop-location-description.png"
	},
	{
		cardTitle: "Madrid",
		cardDescription:
			" Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters.",
		cardImg:
			"https://cdn.odysseytraveller.com/app/uploads/2019/12/Cibeles-Fountain-in-Downtown-Madrid.jpg"
	},
	{
		cardTitle: "Barcelona",
		cardDescription: " description",
		cardImg:
			"https://news.artnet.com/app/news-upload/2019/06/Sagrada-Familia-1024x683.jpg"
	},
	{
		cardTitle: "Berlin",
		cardDescription: " description",
		cardImg:
			"https://www.planetware.com/photos-large/D/east-berlin-former.jpg"
	}
];
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{data.map((item, index) => {
						return (
							<div key={index} className="col-sm">
								<Card
									title={item.cardTitle}
									img={item.cardImg}
									desc={item.cardDescription}
								/>{" "}
							</div>
						);
					})}
				</div>{" "}
			</div>
			<Footer />
		</div>
	);
}
