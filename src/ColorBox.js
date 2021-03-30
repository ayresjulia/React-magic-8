import React from "react";
import "./ColorBox.css";

const ColorBox = ({ color }) => {
	return (
		<div>
			<div style={{ backgroundColor: color }} className="ColorBox" />
		</div>
	);
};
export default ColorBox;
