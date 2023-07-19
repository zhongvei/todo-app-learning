import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
	const [todo, setTodo] = useState("");

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todo);
        setTodo("");
	};

	return (
		<form className="w-full" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add todo"
				className="outline-none bg-none border-solid border-[#8758ff] mt-4 mb-8 p-2 text-black"
				value={todo}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="bg-purple-600 text-white p-2 cursor-pointer border-none"
			>
				Add
			</button>
		</form>
	);
};
