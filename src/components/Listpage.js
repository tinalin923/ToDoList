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
		onSnapshot(q, (snapshot) => {
			console.log(snapshot.docs[0].id);
			setTodos(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text })));
			console.log(todos);
		}, (error) => {
			console.log(error);
		});
	},[])

	const removeTodo = (id) => {
		deleteDoc(doc(db, "todos", id));
	};
	
	return (
		<>
			<TodoForm />
			<ListContainer>
				{todos.map(todo => (<Todo key={todo.id} todo={ todo } removeTodo={removeTodo} />))}
			</ListContainer>
		</>
	);
};