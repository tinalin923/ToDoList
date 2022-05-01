import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"; 
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig.js';
import { Link } from "react-router-dom";

const ListContainer = styled.div`
    border: 1px solid #DCDDD5;
    padding: 20px 0px;
`;

const Button = styled.button`
    display:block;
		width: fit-content;
    margin-left: auto;
    margin-right: auto;   
    margin-top: 100px;
    border: none;    
    border-radius: 10px;
    padding: 15px;
    background-color: #36688D;
		cursor: pointer;
		text-decoration: none;
		color: white;
    &:hover{
        box-shadow: 2px 2px 5px #556588;
    }
`;

export default function ListPage() {
	const listCollection = collection(db, 'todos');
	const [todos, setTodos] = useState([]);
	
	useEffect(() => {
		const q = query(listCollection, orderBy('createdAt', 'desc'));
	    onSnapshot(q, (snapshot) => {
			setTodos(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text })));
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
			<Button as={ Link } to="/" >
					Back
			</Button>
		</>
	);
};