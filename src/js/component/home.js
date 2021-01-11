import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

export function Home(props) {
	const [tasks, setTasks] = useState([
		"running",
		"eating",
		"walking",
		"sleeping",
		"studying"
	]);

	return (
		<div className="text-center mt-5">
			<input
				type="text"
				id="fname"
				name="fname"
				placeholder="first job"
			/>
			<ul className="list-group">
				{tasks.map((task, i) => {
					return <li key={i}> {task}</li>;
				})}
			</ul>
		</div>
	);
}
