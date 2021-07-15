import axios from 'axios'

const KEY = 'AIzaSyA5t9miPR8C9DySADDkgHEQWNrwaWK4dUQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})