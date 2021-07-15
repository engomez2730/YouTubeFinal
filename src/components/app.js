import React from 'react';
import SearchComponent from './searchComponent';
import youtube from '../api/youtube'
import ListVideos from './listVideos'
import SelectedVideo from './selectedVideo'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }

    componentDidMount() {
        this.searchTextApp('perro')
    }

    onSelectedVideo = video => {
        console.log(video)
        this.setState({ selectedVideo: video })
    }

    searchTextApp = async (text) => {
        const respuesta = await youtube.get('/search', {
            params: {
                q: text
            }
        })
        this.setState({
            videos: respuesta.data.items,
            selectedVideo: respuesta.data.items[0]

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