import React, { useState } from 'react';

import styled from 'styled-components';

const InputForm = styled.form`
    height: 80px;
    border: 1px solid #DCDDD5;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const TodoInput = styled.input`
    border-radius: 2px;
    padding: 0.5em;
    border: 2px solid #778877;
    &:focus{
        border: 2px solid #F18904;
        outline: none;
    }
`;

const AddButton = styled.button`
    margin-left: 2px;    
    border: none;    
    border-radius: 2px;
    padding: 0.5em;
    background-color: #F18904;
    font-size:1em;
    color: white;
`;

export default function TodoForm(props) {
    const [thing, setThing] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.todo.value);
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: thing
        });
        setThing('');
    };

    return (
        <InputForm onSubmit={handleSubmit}>
            <TodoInput
                type='text'
                placeholder='Add a Todo'
                onChange={(e) => { setThing(e.target.value) }}
                value={thing}
            />
            <AddButton type='submit' > Add Todo </AddButton>
        </InputForm>
    )
}