import React, { useState } from "react";

//create your first component

export function Jumbotron() {
	const [card, setCard] = useState([
		"https://deadline.com/wp-content/uploads/2018/11/miss-scarlet.jpg",
		"https://i.pinimg.com/originals/57/b4/88/57b488b62e595bc5664ee819867ff085.jpg",
		"https://i.ebayimg.com/images/g/6tYAAOSw6-5d0qB5/s-l400.jpg"
	]);
	const [selected, setSelected] = useState();
	const [selected2, setSelected2] = useState();

	return (
		<div className="container-fluid text-center">
			<h1 className="mt-5">Choose your victim</h1>
			<div className="container">
				<img
					src={
						selected == undefined
							? "https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Transparent.png"
							: card[selected]
					}
					className="img"
					id="myImg"
				/>
			</div>

			<div className="container">
				<button
					type="button"
					className="btn btn-secondary btn-sm"
					onClick={() => {
						setSelected(Math.floor(Math.random() * card.length));
						setSelected2(Math.floor(Math.random() * card.length));
					}}>
					New One !
				</button>
			</div>
			<div className="container">
				<img
					src={
						selected == undefined
							? "https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Transparent.png"
							: card[selected2]
					}
					className="img"
					id="myImg2"
				/>
			</div>
		</div>
	);
}

// https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Transparent.png
