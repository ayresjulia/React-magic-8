import React, { useState } from "react";
import "./ColorBoxes.css";
import ColorBox from "./ColorBox";
import _ from "lodash";

const ColorBoxes = ({ colors }) => {
	let numOfBoxes = 16; // total number of boxes to display
	// let randomColor = _.shuffle(colors)[0];
	const [ color, setColor ] = useState(Array.from({ length: numOfBoxes }, (c) => (c = _.shuffle(colors)[0]))); // initial state of boxes : 16 count, all random color

	const changeColor = () => {
		let idx = Math.floor(Math.random() * numOfBoxes); // random index of a box from 1 to 16

		setColor((color) => {
			let copyColor = [ ...color ]; // returns array of 16 colors
			copyColor[idx] = _.shuffle(colors)[0]; // shuffle color of random color index
			return copyColor; // return random color
		});
	};

	const allBoxes = color.map((color, i) => <ColorBox key={i} color={color} />);

	return (
		<div className="ColorBoxes">
			<div className="boxes">{allBoxes}</div>
			<button onClick={changeColor} className="ColorBoxes-btn">
				Change
			</button>
		</div>
	);
};

export default ColorBoxes;
