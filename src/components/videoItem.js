import React from 'react'
import "./videoItem.css"

const VideoItem = (props) => {
    //Enviando Funcion
    /* const funcionEnviarSelecionado = () => {
        props.selectedVideo(props.video)
    } */


    return (
        <div className="video-item item" onClick={() => props.selectedVideo(props.video)}>
            < img clasname="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}></img >
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem