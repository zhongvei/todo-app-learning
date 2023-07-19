import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faTrash,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
	console.log(todo.id, todo.text, todo.completed);
	return (
        // TODO 
        // if todo is completed, add a line through the text and change the opacity to 50%
		<div className={`flex justify-between  bg-purple-600 text-white rounded mb-4 cursor-pointer py-3 px-4`}>
			<p>{todo.text}</p>
			<div>
				<FontAwesomeIcon
					icon={faCheck}
					className="text-blue-400 mx-2"
					onClick={() => toggleComplete(todo.id)}
				/>
				<FontAwesomeIcon
					icon={faPenToSquare}
					className="text-yellow-400 mx-2"
					onClick={() => editTodo(todo.id)}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className="text-red-500 ml-2"
					onClick={() => deleteTodo(todo.id)}
				/>
			</div>
		</div>
	);
};
