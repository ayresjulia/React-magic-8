import React, { useState } from "react";
import "./EightBall.css";
import _ from "lodash";

const EightBall = ({ answers }) => {
	const [ color, setColor ] = useState("white");
	const [ msg, setMsg ] = useState("Think of a question");
	const [ countG, setCountG ] = useState(0);
	const [ countO, setCountO ] = useState(0);
	const [ countY, setCountY ] = useState(0);

	let randomMsg = _.shuffle(answers)[0];

	const randAnswer = () => {
		setMsg(randomMsg["msg"]);
		setColor(randomMsg["color"]);
		if (randomMsg["color"] === "#39FF14") {
			setCountG(countG + 1);
		} else if (randomMsg["color"] === "#FF5F1F") {
			setCountO(countO + 1);
		} else if (randomMsg["color"] === "#FFFF00") {
			setCountY(countY + 1);
		}
	};

	const reset = () => {
		setMsg("Think of a question");
		setColor("white");
		setCountG(0);
		setCountO(0);
		setCountY(0);
	};

	return (
		<div className="main">
			<div className="EightBall">
				<div className="EightBall-inner">
					<p onClick={randAnswer} className="EightBall-msg" style={{ color }}>
						{msg}
					</p>
				</div>
			</div>
			<button className="EightBall-btn" onClick={reset}>
				Reset
			</button>
			<p className="EightBall-count">
				Color Counts <span id="countG">{countG}</span> - <span id="countO">{countO}</span> -{" "}
				<span id="countY">{countY}</span>
			</p>
		</div>
	);
};

export default EightBall;
