import React, { useState } from "react";

//create your first component

export function Players() {
	const [card, setCard] = useState([
		"https://images-na.ssl-images-amazon.com/images/I/81CcPT2sa4L._SL1500_.jpg",
		"https://www.talasonline.com/images/Nevanon_PARENT-0.jpg",
		"https://pma-physicians.com/wp-content/uploads/2021/01/paper_111691001-600x401.jpg"
	]);
	const [selected, setSelected] = useState();
	const [selected2, setSelected2] = useState();

	return (
		<div className="container-fluid text-center row container">
			<div className="row">
				<h1 className="mt-5">Choose your player</h1>
			</div>
			<div className="row">
				<div className="col-sm">
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

				<div className="col-sm">
					<button
						type="button"
						className="btn btn-secondary btn-sm"
						onClick={() => {
							setSelected(
								Math.floor(Math.random() * card.length)
							);
							setSelected2(
								Math.floor(Math.random() * card.length)
							);
						}}>
						New One !
					</button>
				</div>
				<div className="col-sm">
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
		</div>
	);
}

// https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Transparent.png
