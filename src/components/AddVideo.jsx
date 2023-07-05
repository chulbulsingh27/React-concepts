import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

import useVideoDispatch from '../hooks/VideoDispatch'
// import VideoDispatchContext from '../context/VideoDispatchContext'
const initialState = {
    channel: "My Channel",
    time: "2 months  ago",
    verified: false,
    title:'',
    views:''
}
export const AddVideo = ({editableVideo}) => {
    // const dispatch = useContext(VideoDispatchContext)
    const dispatch = useVideoDispatch()
    const inputRef = useRef(null);
    const [video,setVideo] = useState(initialState)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editableVideo){
            dispatch({ type: "UPDATE", payload: video })
        }
        else{
            dispatch({ type: 'ADD', payload: video })
        }
        setVideo(initialState)
    }
    const handleChange=(e)=>{
        setVideo({...video,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        if(editableVideo) setVideo(editableVideo)
        inputRef.current.value="hello"
        inputRef.current.focus()

    },[editableVideo]) 
    return (
        <form>
            <div className='flex space-x-2 '>
                <input ref={inputRef} name="title" type="text" value={video.title} className='border-2 border-black p-3'placeholder='title' onChange={handleChange}></input>
                <input name="views" type="text" value={video.views} className='border-2 border-black p-3' placeholder='views' onChange={handleChange}></input>
                <button type='submit' onClick={handleSubmit} className='border-2'>
                    {editableVideo?'Edit': 'Add'}Video
                </button>
            </div>
        </form>
    )
}
