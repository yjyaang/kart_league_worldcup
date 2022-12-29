import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const StartContainer = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const StartTitle = styled.div`
    font-size: 60px;
    font-family: 'PyeongChangPeace-Bold';
    white-space: pre-wrap;
    text-align: center;
`

const StartMain = styled.div`
    font-size: 20px;
`

const StartBtn = styled.button`
    width: 300px;
    height: 70px;
    border-style: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    font-family: 'GmarketSansMedium';
    background-image: linear-gradient(to right, #667eea, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    cursor: pointer;
    position: relative;
    &:hover {
        opacity: .8;
        transition: 0.2s;
        bottom: 2px;
    }
    &:active {
        top: 4px;
    }
`

const Start = () => {
    const titleContent = '카트라이더 리그\n명장면 월드컵'
    return (
        <StartContainer>
            <StartTitle>{titleContent}</StartTitle>
            <StartMain>당신이 생각하는 최고의 명장면에 투표해 주세요!!</StartMain>
            <Link to="/main"><StartBtn>Start</StartBtn></Link>
        </StartContainer>
    )
}

export default Start