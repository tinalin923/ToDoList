import React, { useState } from 'react';
import styled from 'styled-components';


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

export default function ChangeButton({isEdit,setIsEdit}) {
	const [button, setButton] = useState("Start");

	const changeHandeler = () => {
		setIsEdit(!isEdit);
		isEdit ? setButton("Start") : setButton("Back");
	};
	
	return <Button onClick={changeHandeler}>{button}</Button>;
};

