import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {

	const [task, setTask] = useState("");
	const {store,actions } = useContext(Context)

	///////////

		
	///////
	return (
		<>
			<div className="card text-center  w-25 p-4 mx-auto border border-danger mt-3 border border-5">
				<div className="d-flex justify-content-center">
					<h1>Things to do</h1>
				</div>
				<div className="d-flex justify-content-center input-group mb-3">
					<input
						type="text"
						placeholder="Add Task"
						onChange={(event) => {
							setTask(event.target.value);
						}}
						value={task}
						onKeyUp={(event) => {
							if (task !== "" && event.key == "Enter") {
								actions.addItem(task);
								setTask("");
							}
						}}
					/>
					<button
						onClick={() => {
							if (task !== "") {
								actions.addItem(task);
								setTask("");
							}
						}}>
						Submit
					</button>
				</div>
				<ul>
					{store.list &&
						store.list.map((listItem, index) => {
							return (
								<li
									key={index}
									className="d-flex flex-row justify-content-center btn btn-outline-success">
									<p> {listItem.label} </p>
									<button
										className="btn btn-primary btn-sm ms-2"
										onClick={() => {
											actions.deleteItem(
												store.list.filter(
													(item, i) => i !== index
												)
											);
										}}>
										Delete
									</button>
								</li>
							);
						})}
				</ul>
			</div>
		</>
	);
};
export default Home;