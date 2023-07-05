import React from 'react'
import { useEffect } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import useVideoDispatch from '../hooks/VideoDispatch'
// import VideoDispatchContext from '../context/VideoDispatchContext'
//import { PlayButton } from './PlayButton'

export const Video = ({ title, views, time, verified, id, children, editVideo }) => {
  //console.log('render video')
  // const dispatch = useContext(VideoDispatchContext)
  const dispatch = useVideoDispatch()
  // useEffect(() => {
  //   setInterval(()=>{
  //     console.log('video playing', id)
  //   },3000)

  // },[id])

  const channel = "My Channel"
  return (
    <div className='p-2'>
      <div className='flex items-center justify-center space-x-8'>
        <button className='text-red-500 relative w-[50px]' onClick={() => dispatch({ type: 'DELETE', payload: id })}>
          <MdDelete size={30} />
        </button>
        <button className='text-green-600 relative ' onClick={() => editVideo(id)}>
          <MdEdit size={32} />
        </button>
      </div>
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="photo1" className='flex flex-row w-[240px] h-[230px]' />
      <div className='text-md font-semibold'>
        <p className=''>{title}</p>
        <p className=''>{channel} {verified && '✅'}</p>
        <p className=''>{views}views <span>.</span>{time}
        </p>
      </div>
      {children}

    </div>
  )
}
