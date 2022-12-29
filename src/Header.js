import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Title = styled.div`
    text-align: center;
    color: #000;
    font-size: 16px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Header = () => {
    return (
        <StyledLink to={"/"}><Title>GO TO MAIN <i class="fa-solid fa-house"></i></Title></StyledLink>
    )
}

export default Header