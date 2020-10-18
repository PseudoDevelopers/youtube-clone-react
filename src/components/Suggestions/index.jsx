import React from 'react'
import styled from 'styled-components'
import Video from './Video'


class Suggestions extends React.Component {
    state = {
        videos: this.props.videos,
        playVideo: this.props.playVideo
    }

    componentWillReceiveProps(props) {
        this.setState({ videos: props.videos })
    }

    render() {
        return (
            <SuggestionsContainer>
                {this.suggestions()}
            </SuggestionsContainer>
        )
    }

    suggestions() {
        // In case of no video we return
        // some empty video (that show skeleton)
        if (this.state.videos.length === 0) {
            let videos = []

            for (let i = 0; i < 7; i++)
                videos.push(<Video key={i} />)
            return videos
        }

        return this.state.videos.map(video => {
            return (
                <Video
                    key={video.videoId}
                    {...video}
                    playVideo={this.state.playVideo}
                />
            )
        })
    }
}

export default Suggestions


Suggestions.defaultProps = {
    videos: [],
    playVideo: null
}


const SuggestionsContainer = styled.div`
    margin-left: 20px;
`
