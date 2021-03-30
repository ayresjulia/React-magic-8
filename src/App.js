import "./App.css";
import React from "react";
import EightBall from "./EightBall";
import ColorBoxes from "./ColorBoxes";
import answers from "./answers";
import colors from "./colors";

const App = () => {
	return (
		<div>
			<EightBall answers={answers} />
			<ColorBoxes colors={colors} />
		</div>
	);
};

export default App;
