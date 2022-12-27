import React from 'react';
import YouTube from 'react-youtube';

const Video4 = () => {
    return (
        <YouTube
            //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
            videoId="G1R8tJMEAR4"
            //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
            opts={{
                width: "720",
                height: "480",
                playerVars: {
                    autoplay: 0, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                },
            }}
            //이벤트 리스너 
            onEnd={(e) => { e.target.stopVideo(0); }}
        />
    )
}

export default Video4