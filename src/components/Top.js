import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    height: 80px;
    background-color:#F18904;
    font-size: 2em;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export default function Top(){
    return <Title>React practice</Title>;
};