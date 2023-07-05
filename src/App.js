import { useReducer, useState } from "react";
import { AddVideo } from "./components/AddVideo";
import { Counter } from "./components/Counter";
import InterView from "./components/InterView";
//import { Counter } from "./components/Counter";
import { VideoList } from "./components/VideoList";
import VideoDispatchContext from "./context/VideoDispatchContext";
import VideosContext from "./context/VideosContext";
import videoDb from "./data/data";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const videoReducer = (videos, action) => {
    switch (action.type) {
      case 'LOAD':
        return action.payload;
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case 'DELETE':
        return videos.filter((c) => c.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex((c) => c.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }

  }
  const [videos, dispatch] = useReducer(videoReducer, [])
  //const [videos, setVideos] = useState(videoDb);

  // const addVideos = (video) => {
  //   dispatch({ type: 'ADD', payload: video })
  //   // setVideos([...videos,{...video,id:videos.length+1}])
  // }
  // const deleteVideo = (video) => {
  //   dispatch({ type: 'DELETE', payload: video })
  //   // setVideos(videos.filter((c)=> c.id !== id))
  // }
  const editVideo = (id) => {
    // dispatch({type:'edit',payload:id})
    // console.log(id)
    setEditableVideo(videos.find((c) => c.id === id))
  }
  // const updateVideo = (video) => {
  //   dispatch({ type: "UPDATE", payload: video })
  //   // const index =  videos.findIndex((c)=> c.id === video.id)
  //   // const newVideos = [...videos]
  //   // newVideos.splice(index,1,video)
  //   // setVideos(newVideos);
  //   // setVideos(newVideos)
  // }
  return (
    <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className="w-full h-full">
          <Counter/>
          {/* <div className="p-2">
        <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      </div> */}
          <div className="p-2">
            <AddVideo editableVideo={editableVideo} ></AddVideo>
          </div>
          <VideoList  editVideo={editVideo}></VideoList>
          <div className="flex">
          </div>
        </div>
      </VideoDispatchContext.Provider>
    </VideosContext.Provider>
    
  );
}
export default App;
