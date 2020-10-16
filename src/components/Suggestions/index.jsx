import React from 'react'
import styled from 'styled-components'
import Video from './Video'


const SuggestionsContainer = styled.div`
    margin-left: 20px;
`

class Suggestions extends React.Component {
    state = { videos: this.props.videos }

    render() {
        return (
            <SuggestionsContainer>
                {this.suggestions()}
            </SuggestionsContainer>
        )
    }

    suggestions() {
        let videos = []

        if (this.state.videos.length === 0) {
            for (let i = 0; i < 7; i++) {
                videos.push(
                    <Video key={i} />
                )
            }
        }
        else {
            videos = this.state.videos.map(details => {
                return <Video {...details} />
            })
        }

        return videos
    }
}

export default Suggestions
