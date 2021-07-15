import React from 'react';
import ItemVideo from './videoItem';


const ListVideos = (props) => {
    const videosFinal = props.videos.map((video) => {
        //Enviando la funcion onSelectedVideo para ItemVideo
        return <ItemVideo key={video.id.videoId} video={video} selectedVideo={props.onSelectedVideo} > </ItemVideo>
    })
    return (
        <div className="ui relaxed divided list">
            {videosFinal}
        </div>
    )
}

export default ListVideos