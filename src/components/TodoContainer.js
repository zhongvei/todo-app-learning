import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

// Todo data type
const todo_data = {
	id: 1,
	text: "test",
	isComplete: false,
};

export const TodoContainer = () => {
	const [todos, setTodos] = useState([]);

	// Todo functions
	const addTodo = (todo) => {
		console.log(todo);
	};

	const toggleComplete = (id) => {
		console.log(id);
	};

	const deleteTodo = (id) => {
		console.log(id);
	};

	const editTodo = (id) => {
		prompt("Edit Todo", id);
		console.log(id);
	};

	return (
		<div className="bg-[#0d1117] mt-24 p-8 rounded-xl w-1/3">
			{/* Todo, conditional rendering on the text todo(s) to add or not based on the number of todos */}
			<p className="text-white font-bold text-3xl">My Todo List</p>
			<p className="text-white font-bold text-xl">
				{todos.length} todo(s) remaining
			</p>
			<TodoForm addTodo={addTodo} />
			<Todo
				key={1}
				todo={{ id: 1, text: "test", isComplete: false }}
				toggleComplete={toggleComplete}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
			/>
			{/* For every todo in todos, render a Todo component */}
		</div>
	);
};
