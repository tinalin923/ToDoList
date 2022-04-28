import React, {useState} from 'react';
import styled from 'styled-components';


const List = styled.div`
	margin: 10px auto;	
	width: 360px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.button`
	margin-left: 10px;	
	border:none;
	border-radius: 10px;
	padding: 5px;
	background-color: #F3CD05;
	color: white;
	cursor: pointer;
	&:hover{
			box-shadow: 2px 2px 5px #556588;
	}
`

export default function Todo({todos, removeTodo}) {
    return todos.map((thing) => (
        <List  key={thing.id}>
          <div>{thing.text}</div>
				<Button onClick={() => { removeTodo(thing.id) }}> Delete </Button>
        </List>
        
    ))
};