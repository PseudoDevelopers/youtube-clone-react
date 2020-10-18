import React from 'react'
import './Video.scss'


class Video extends React.Component {
    state = {
        thumbnailLink: this.props.thumbnailLink,
        title: this.props.title,
        videoId: this.props.videoId,
        channelId: this.props.channelId,
        channelName: this.props.channelName,

        playVideo: this.props.playVideo
    }

    render() {
        const {
            thumbnailLink,
            title,
            videoId,
            channelId,
            channelName
        } = this.state

        const isSkeleton = videoId === '' ? 'skeleton' : ''

        return (
            <div className={`video ${isSkeleton}`}>
                <div href={videoId} onClick={this.playVideo}>
                    <img src={thumbnailLink} alt={title} />
                </div>

                <div className="details">
                    <h3 className="title" onClick={this.playVideo}>{title}</h3>

                    <a
                        className="channel-name"
                        href={`https://www.youtube.com/channel/${channelId}`}
                        target="_blank"
                    >
                        {channelName}
                    </a>
                </div>
            </div>
        )
    }

    playVideo = () => {
        if (this.state.playVideo !== null)
            this.state.playVideo(this.state.videoId)
    }
}

Video.defaultProps = {
    thumbnailLink: '',
    title: '',
    videoId: '',
    channelId: '',
    channelName: '',

    playVideo: null
}

export default Video
