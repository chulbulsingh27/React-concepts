import { useContext } from "react";
import VideosContext from "../context/VideosContext";

function useVideos(){
    const dispatch = useContext(VideosContext)
    return dispatch;
}
export default useVideos