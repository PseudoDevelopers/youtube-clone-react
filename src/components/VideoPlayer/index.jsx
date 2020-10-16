import React from 'react'
import Player from './Player'
import './index.scss'


class VideoPlayer extends React.Component {
    state = {  }
    render() {
        return <div className="skeleton">
            {/* <Player videoId="pRpeEdMmmQ0" /> */}
            <Player videoId="" />
            
            <div id="current-video-details">
                <h2></h2>
                <p></p>
            </div>
        </div>
    }
}

export default VideoPlayer
