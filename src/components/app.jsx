import React from 'react'
import styled from "styled-components"

import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer/'
import Suggestions from './Suggestions/'

import youtubeSearch from '../api/youtubeSearch'


class App extends React.Component {
    state = { videos: [] }
    render() {

        return (
            <Container>
                <SearchBar onSubmit={this.onSearchSubmit} />

                <InnerContainer>
                    <VideoPlayer />
                    <Suggestions videos={this.state.videos} playVideo={this.playVideo} />
                </InnerContainer>
            </Container>
        )
    }

    onSearchSubmit = async query => {
        const response = await youtubeSearch.get('', {
            params: { q: query }
        })

        this.setState({ videos: this.extractUsefuldata(response.data.items) })
    }

    playVideo = videoId => {
        console.log('Play video', videoId)
    }


    extractUsefuldata(videos) {
        return videos.map(({ id, snippet }) => {
            const videoId = id.videoId
            const {
                thumbnails,
                title,
                channelId,
                channelTitle
            } = snippet

            return {
                thumbnailLink: thumbnails.default.url,
                title: title,
                videoId: videoId,
                channelId: channelId,
                channelName: channelTitle
            }
        })
    }
}

export default App


const Container = styled.div`
    margin: 40px auto;
    width: 96vw;
`

const InnerContainer = styled.div`
    margin-top: 40px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
