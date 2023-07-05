import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useVideoDispatch from '../hooks/VideoDispatch'

// import VideosContext from '../context/VideosContext'
import useVideos from '../hooks/Videos'
import { PlayButton } from './PlayButton'
import { Video } from './Video'
export const VideoList = ({ editVideo }) => {
    const url = "https://my.api.mockaroo.com/video.json.json?key=4c3f7b10"
    // const videos = useContext(VideosContext)
    const videos = useVideos()
    const dispatch = useVideoDispatch()
    
    async function handleClick() {
        const responce = await axios.get(url);
        console.log(responce.data)
        dispatch({type:'LOAD' , payload: responce.data})
    }
    useEffect(()=>{
        handleClick();

    },[])
    return (
        <div className='grid grid-cols-4'>
            {videos.map((video, index) => {
                return (
                    <>
                        <div>
                            <Video
                                key={video.id}
                                title={video.title}
                                views={video.views}
                                time={video.time}
                                verified={video.verified}
                                id={video.id}
                                editVideo={editVideo}
                            />
                            <PlayButton
                                onPlay={() => console.log('play', video.title)}
                                onPause={() => console.log('pause', video.title)}>
                                {video.title}
                            </PlayButton>
                        </div>    
                    </>
                )
            })}
        </div>
    )
}
