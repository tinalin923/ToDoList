import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore"; 
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig.js';

const ListContainer = styled.div`
    border: 1px solid #DCDDD5;
    padding: 20px 0px;
`;

export default function ListPage() {
	const listCollection = collection(db, 'todos');
	const [todos, setTodos] = useState([]);
	
	useEffect(() => {
		const q = query(listCollection, orderBy('createdAt', 'desc'));
		onSnapshot( q, (snapshot) => {
			setTodos(snapshot.docs.map(doc => ({id:doc.id, text:doc.data().text}) ));
		}, (error) => {
			console.log(error);
		});
	},[])
	
	const addTodo = (input) => {
		if (!input.text) { return; }
		try {
		 	addDoc(listCollection, input);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		const newTodos = [...todos, input];
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		deleteDoc(doc(db, "todos", id));
		// const newArr = todos.filter(todo => { return todo.id !== id; });
		// setTodos(newArr);
	};
	
	return (
		<>
			<TodoForm onSubmit={addTodo} />
			<ListContainer>
				{todos.map(todo => (<Todo key={todo.id} todo={ todo } removeTodo={removeTodo} />))}
			</ListContainer>
		</>
	);
};