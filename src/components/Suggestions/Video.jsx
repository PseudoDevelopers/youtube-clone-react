import React from 'react'
import './Video.scss'

import Link from '../Common/Link'



class Video extends React.Component {
    state = {
        thumbnailLink: this.props.thumbnailLink,
        title: this.props.title,
        videoLink: this.props.videoLink,
        channelLink: this.props.channelLink,
        channelName: this.props.channelName
    }

    render() {
        const {
            thumbnailLink,
            title,
            videoLink,
            channelLink,
            channelName
        } = this.state

        const isSkeleton = videoLink === '' ? 'skeleton' : ''

        return (
            <div className={`video ${isSkeleton}`}>
                    <Link href={videoLink}>
                        <img src={thumbnailLink} alt={title} />
                    </Link>

                <div className="details">
                    <Link href={videoLink}>
                        <h3 className="title">{title}</h3>
                    </Link>

                    <Link
                        className="channel-name"
                        href={channelLink}
                        text={channelName}
                    />
                </div>
            </div>
        )
    }
}

Video.defaultProps = {
    thumbnailLink: '',
    title: '',
    videoLink: '',
    channelLink: '',
    channelName: ''
}

export default Video
