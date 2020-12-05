import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbtron";
import { Card } from "./card";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const data = [
	{
		cardTitle: "card01",
		cardDescription: " description"
	},
	{
		cardTitle: "card02",
		cardDescription: " description"
	},
	{
		cardTitle: "card03",
		cardDescription: " description"
	},
	{
		cardTitle: "card04",
		cardDescription: " description"
	},
	{
		cardTitle: "card05",
		cardDescription: " description"
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
								<Card title={item.cardTitle} />{" "}
							</div>
						);
					})}
				</div>{" "}
			</div>
			<Footer />
		</div>
	);
}
