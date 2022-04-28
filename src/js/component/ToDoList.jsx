import React from "react";
import { useState, useEffect } from "react";
import "../../styles/ToDoList.css";

const ToDoList = () => {
	const [input, setinput] = useState("");
	const [lista, setLista] = useState([]);
	function borrar(i) {
		let re = lista.filter((valor, index) => {
			return index != i;
		});

		setLista(re);
	}
	return (
		<>
			<div>
				<div className="list">
					<h2>Lista de tareas pendientes</h2>

					<input
						placeholder="Agregar nueva tarea "
						type="text"
						id="inputNuevaTarea"
						onChange={(e) => {
							setinput(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							setLista([...lista, input]);
						}}>
						OK
					</button>
					<ul id="contenedorTareas">
						{lista.map(function (valor, i) {
							return (
								<li key={i}>
									{valor}
									<button
										className="xbutton"
										onClick={() => {
											borrar(i);
										}}>
										X
									</button>{" "}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div>
				<img
					className="flowers"
					src="https://i.pinimg.com/originals/27/4d/76/274d7614cd36432a341afdb087f10728.png"
					alt="flowers"
				/>
			</div>
		</>
	);
};

export default ToDoList;
