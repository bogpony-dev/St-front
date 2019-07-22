import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
	<div className="jumbotron">
		<h1>Stockticker</h1>
		<p>A react fron end for the world trading data stock api.</p>
		<Link to="about" className="btn btn-primary btn-lg">
			Learn more
		</Link>
	</div>
);

export default HomePage