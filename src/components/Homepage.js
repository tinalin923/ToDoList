import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.div`
    height: 80px;
    background-color:#F18904;
    font-size: 2em;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const Section = styled.div`       
        height: 300px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #F49F05;
        font-family: 'Libre Bodoni', serif;
        font-size: 2.5em;
        color: white;
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
    text-decoration: none;
	color: white;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 5px #556588;
    }
`;

export default function HomePage(){
  return (
		<>
			<Title>React practice</Title>
      <Section>Welcome to My Home</Section>
      <Button as={Link} to="/list" >
				Start
			</Button>
		</>
	)
};