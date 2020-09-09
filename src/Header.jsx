import React from "react";
import corona from "./corona.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
	return (
		<>
			<div className="header">
				<h1>GO Corona GO</h1>
				<img className="img-fluid" src={corona} width="200" height="200" />
			</div>
		</>
	);
};
export default Header;
