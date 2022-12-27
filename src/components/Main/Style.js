import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 90vh;

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

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SelectBtn = styled.button`
    width: 300px;
    height: 70px;
    margin: 20px;
    white-space: pre-wrap;
    font-size: 18px;
    background: rgb(119,71,221);
    background: linear-gradient(135deg, rgba(119,71,221,1) 0%, rgba(212,130,235,1) 100%);
    border-style: none;
    border-radius: 40px;
    font-family: 'GmarketSansMedium';
    cursor: pointer;
`