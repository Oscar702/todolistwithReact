import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

export function Home(props) {
	const [tasks, setTasks] = useState([]);
	const [work, setWork] = useState("");
	const add = () => {
		tasks.push(work);
	};
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				id="fname"
				name="fname"
				placeholder="first job"
				onChange={e => setWork(e.target.value)}
				value={work}
			/>

			<button
				className="add-button"
				onClick={() => setTasks([...tasks, work])}>
				ADD
			</button>
			<ul className="list-group">
				{tasks.map((task, i) => {
					return (
						<li
							onClick={() => {
								let filterTasks = tasks.filter(
									(task, index) => {
										return i != index;
									}
								);
								setTasks(filterTasks);
							}}
							key={i}>
							{" "}
							{task}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
