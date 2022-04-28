import React from 'react';
import styled from 'styled-components';

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

export default function HeroImage(){
    return <Section>Welcome to My Home</Section>;
};