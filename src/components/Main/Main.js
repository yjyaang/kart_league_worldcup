import React, { useState, useEffect } from 'react'
// import styled from "styled-components"
import { FlexBox, SelectArea, SelectBtn } from './Style';
// import Video1 from '../../video/Video1';
// import Video2 from '../../video/Video2';
// import Video3 from '../../video/Video3';
// import Video4 from '../../video/Video4';

const items = [
    {
        name: '에볼루션 결승 에결\n문호준vs유영혁',
        src: <iframe width="720" height="480" src="https://www.youtube.com/embed/Jm5CtdZz7tY" title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    },
    {
        name: '2022 시즌 2 플레이오프 에결\n유창현vs노준현',
        src: <iframe width="720" height="480" src="https://www.youtube.com/embed/eP1eEJHnw_g" title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    },
    {
        name: '2020 시즌 1 개인전 결승 SET 1\n문호준',
        src: <iframe width="720" height="480" src="https://www.youtube.com/embed/ypPIwE9q7XI" title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    },
    {
        name: '2019 시즌 1 개인전 결승\n문호준vs박인수',
        src: <iframe width="720" height="480" src="https://www.youtube.com/embed/G1R8tJMEAR4" title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }
]

const Main = () => {
    const [clips, setClips] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [count, setCount] = useState('4강');

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
        <FlexBox>
            {/* {displays.map(item => {
                return (
                <SelectArea className="flex-1" key={item.name}>
                    {item.src}
                    <SelectBtn onClick={clickHandler(item)}>{item.name}</SelectBtn>
                </SelectArea>
                )
            })} */}
            <h1 className='title'>{count === 0 ? '우승' : count}</h1>
            {displays.length === 1
            ? 
            <SelectArea className="flex-1">
                <h1>당신이 선택한 최고의 명장면은</h1>
                {displays[0].src}
                <h2>{displays[0].name}</h2>
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
    )
}

export default Main