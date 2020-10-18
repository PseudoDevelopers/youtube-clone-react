import React from 'react'
import styled from 'styled-components'
import './Player.scss'


class Player extends React.Component {
    state = {
        videoId: this.props.videoId,
        title: this.props.title,
        player: {
            width: this.props.player.width,
            height: this.props.player.height
        }
    }

    render() {
        const videoId = this.state.videoId

        const PlayerDiv = styled.div`
            width: ${this.state.player.width}px;
            height: ${this.state.player.height}px;
        `

        return (
            <PlayerDiv id="player">
                {videoId !== null ? this.iframe() : ''}
            </PlayerDiv>
        )
    }

    componentWillReceiveProps(props) {
        this.setState({ videoId: props.videoId })
    }

    iframe() {
        const {
            videoId,
            title
        } = this.state

        const {
            width,
            height
        } = this.state.player

        return (
            <iframe
                title={title}
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        )
    }
}

export default Player

Player.defaultProps = {
    videoId: null,
    title: '',
    player: {
        width: 760,
        height: 455
    }
}
