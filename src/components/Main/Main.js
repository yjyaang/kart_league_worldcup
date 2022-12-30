import React, { useState, useEffect } from 'react'
// import styled from "styled-components"
import { FlexBox, SelectArea, SelectBtn, RoundCounter } from './Style';
import {items} from '../../video/Videos'

const Main = () => {
    const [clips, setClips] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [count, setCount] = useState('16강');

    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setClips(items);
        setDisplays([items[0], items[1]]);
    }, [])

    const clickHandler = (clip) => () => {
        if(clips.length <= 2) {
            //최종우승 화면에 띄우기
            if(winners.length === 0) {
                setDisplays([clip])
                setCount(0);
            // 마지막 선택 후 다음 토너먼트로 넘어갈 때(예: 16강 -> 8강)
            } else {
                let updatedClip = [...winners, clip];
                setClips(updatedClip);
                setDisplays([updatedClip[0], updatedClip[1]]);
                setWinners([]);
                setCount(count === '4강' ? '결승' : `${parseInt(count)/2}강`);
            }
            // 해당 토너먼트 진행 중
        } else if(clips.length > 2) {
            setWinners([...winners, clip])
            setDisplays([clips[2], clips[3]])
            setClips(clips.slice(2))
        }
    }

    return (
        <>
            <RoundCounter><h1>{count === 0 ? '우승' : count}</h1></RoundCounter>
        <FlexBox>
            {displays.length === 1
            ? 
            <SelectArea className="flex-1">
                <div className="winner-content">당신이 선택한 최고의 명장면은</div>
                {displays[0].src}
                <div className="winner-content">{displays[0].name}</div>
            </SelectArea>
            :
            displays.map(item => {
                return (
                <SelectArea className="flex-1" key={item.name}>
                    {item.src}
                    <SelectBtn onClick={clickHandler(item)}>{item.name}</SelectBtn>
                </SelectArea>
                )
            })}
        </FlexBox>
        </>
    )
}

export default Main