import React from 'react';

const SelectedVideo = (props) => {
    if (!props.video) {
        return <h1>Cargando</h1>
    }

    const idEmbed = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe width="560" height="315" src={idEmbed} title='Titulo' />
            </div>
            <div className='ui segment'>
                <h3 className='ui header'>{props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>

    )
}


export default SelectedVideo;