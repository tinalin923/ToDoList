import React, { useState } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';

const ListContainer = styled.div`
    border: 1px solid #DCDDD5;
    padding: 20px 0px;
`;

export default function ListPage() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text) { return; }
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		// console.log(newTodos);
	};

	const removeTodo = (id) => {
		// console.log(id);
		const newArr = todos.filter(todo => { return todo.id !== id; });
		// console.log(newArr);
		setTodos(newArr);
	};
	
	return (
		<>
			<TodoForm onSubmit={addTodo} />
			<ListContainer>
				<Todo todos={todos} removeTodo={removeTodo} />
			</ListContainer>
		</>
	);
};