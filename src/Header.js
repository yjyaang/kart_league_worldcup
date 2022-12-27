import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Title = styled.div`
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #000;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Header = () => {
    return (
        <StyledLink to={"/"}><Title>Kartrider League Highlight WorldCup</Title></StyledLink>
    )
}

export default Header