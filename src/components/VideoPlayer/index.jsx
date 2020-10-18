import React from 'react'
import Player from './Player'
import './index.scss'


class VideoPlayer extends React.Component {
    state = {
        videoId: this.props.videoId,
        title: this.props.title,
    }

    render() {
        return (
            <div className={this.state.videoId !== null ? '' : 'skeleton'}>
                <Player videoId={this.state.videoId} />

                <div id="current-video-details">
                    <h2>{this.state.title}</h2>
                </div>
            </div>
        )
    }

    componentWillReceiveProps({ videoId, title }) {
        this.setState({
            videoId: videoId,
            title: title,
        })
    }
}

export default VideoPlayer


VideoPlayer.defaultProps = {
    videoId: null,
    title: null
}
