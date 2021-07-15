import React from 'react';
import SearchComponent from './searchComponent';
import youtube from '../api/youtube'
import ListVideos from './listVideos'
import SelectedVideo from './selectedVideo'

class App extends React.Component {
    //Inicializando el State
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }
    //Inicializando la App con la palabra "Perro" para que siempre se la primera busqueda
    componentDidMount() {
        this.searchTextApp('perro')
    }
    //Igualando la propiedad SelectedVideo al video selecionado en pantalla
    onSelectedVideo = video => {
        this.setState({ selectedVideo: video })
    }

    searchTextApp = async (text) => {
        //haciendo la llamada a la API
        const respuesta = await youtube.get('/search', {
            params: {
                q: text
            }
        })
        //Igualando los datos de la Api a la variable del Objeto
        this.setState({
            videos: respuesta.data.items,
            selectedVideo: respuesta.data.items[0] //igualando el Video Selecionado al primer elemento del Array de Videos
        })
    }
    render() {
        return (
            <div className="ui container">
                <SearchComponent searchText={this.searchTextApp} /> 
                <div class="ui grid">
                    <div class="eleven wide column">
                        <SelectedVideo video={this.state.selectedVideo} />
                    </div>
                    <div class="five wide column">
                        <ListVideos onSelectedVideo={this.onSelectedVideo} videos={this.state.videos}></ListVideos>
                    </div>
                </div>

            </div>
        )
    }
}


export default App;