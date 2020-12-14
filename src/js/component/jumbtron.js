import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				I love traveling. Here is a list of places we can go together.
			</p>
			<hr className="my-4" />
			<p>Don't forget to buy my tickets.</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Buy tickets
			</a>
		</div>
	);
}
