import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import HeroImage from './components/HeroImage.js';
import Top from './components/Top.js';

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
    color: white;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 5px #556588;
    }
`;

export default function App() {
	return (
		<>	
			<Top />
			<HeroImage />
			<Button as={Link} to="/list" style={{ textDecoration: 'none', color: 'white' }}>
					Start
			</Button>
		</>
	)
};
