import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 85vh;

    .flex-1 {
        flex: 1;
    }

    .title {
        position: absolute;
        z-index: 2;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const RoundCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .youtube {
        width: 64vh;
        height: 40vh;
    }

    .winner-content {
        font-size: 2.2vh;
        padding: 20px;
    }
`

export const SelectBtn = styled.button`
    width: 31vh;
    height: 7vh;
    margin: 20px;
    white-space: pre-wrap;
    font-size: 1.8vh;
    background-image: linear-gradient(to right, #667eea, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    border-style: none;
    border-radius: 5px;
    font-family: 'GmarketSansMedium';
    color: #fff;
    position: relative;
    cursor: pointer;
    &:hover {
        opacity: .8;
        transition: 0.2s;
        bottom: 2px;
    }
    &:active {
        top: 4px;
    }
`