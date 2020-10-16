import React from 'react'
import styled from "styled-components"

import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer/'
import Suggestions from './Suggestions/'


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

class App extends React.Component {
    state = { videos: [] }

    render() {
        return (
            <Container>
                <SearchBar />

                <InnerContainer>
                    <VideoPlayer />
                    <Suggestions videos={this.state.videos} />
                </InnerContainer>
            </Container>
        )
    }
}

export default App
