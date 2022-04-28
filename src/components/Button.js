import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ListPage from './Listpage.js';
import HomePage from './Homepage.js';

const Button = styled.button`
    display:block;  
    margin-left: auto;
    margin-right: auto;   
    margin-top: 100px;
    border: none;    
    border-radius: 10px;
    padding: 15px;
    background-color: #36688D;
    color: white;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 5px #556588;
    }
`;

export default function ChangeButton() {
    const [isEdit, setIsEdit] = useState(false);
    const [button, setButton] = useState("Start");

    const changHandler = () => {
        setIsEdit(!isEdit);
        if (isEdit) {
            setButton("Start");
        } else {
            setButton("Back");
        }
    };
    return <Button onClick={changHandler}>{button}</Button>;
};

