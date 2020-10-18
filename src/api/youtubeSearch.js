import axios from 'axios'
const API_KEY = process.env.REACT_APP_YOUTUBE_API


const youtubeSearch = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: API_KEY
    }
})


export default youtubeSearch
