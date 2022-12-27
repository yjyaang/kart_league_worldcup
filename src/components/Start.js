import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const StartContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const StartTitle = styled.div`
    font-size: 52px;
    font-family: 'PyeongChangPeace-Bold';
`

const StartMain = styled.div`
    font-size: 20px;
`

const StartBtn = styled.button`
    width: 300px;
    height: 70px;
    border-style: none;
    border-radius: 40px;
    font-size: 20px;
    font-family: 'GmarketSansMedium';
    background: rgb(119,71,221);
    background: linear-gradient(135deg, rgba(119,71,221,1) 0%, rgba(212,130,235,1) 100%);
    cursor: pointer;
`

const Start = () => {
    return (
        <StartContainer>
            <StartTitle>카트라이더 리그 명장면 월드컵</StartTitle>
            <StartMain>당신이 생각하는 최고의 명장면에 투표해 주세요!!</StartMain>
            <Link to="/main"><StartBtn>Start</StartBtn></Link>
        </StartContainer>
    )
}

export default Start