import React, { useState } from 'react'
import {BiPlay} from 'react-icons/bi'
import {BsPauseFill} from 'react-icons/bs'
export const PlayButton = ({message,children,onPlay,onPause}) => {
    const[playing,setPlaying] = useState(false);
    const handleClick = () => {
        if(playing) onPause()
        else onPlay()
        setPlaying(!playing);
    }
  return (
    <div className='p-2'>
        <button className = 'border-2 border-black' onClick={handleClick}>{children} : {playing?<BiPlay/>:<BsPauseFill/>}
        </button>
    </div>
  )
}
