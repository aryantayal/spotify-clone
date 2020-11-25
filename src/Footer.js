import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBackward} from '@fortawesome/free-solid-svg-icons'
import {faForward} from '@fortawesome/free-solid-svg-icons'
import {faRandom} from '@fortawesome/free-solid-svg-icons'
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import {faFileAudio} from '@fortawesome/free-solid-svg-icons'
import {faVolumeDown} from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <p>Album and song details</p>
            </div>
            <div className="footer_center">
                <FontAwesomeIcon icon={faRandom} className="footer_green"/>
                <FontAwesomeIcon icon={faBackward} className="footer_icon"/>
                <FontAwesomeIcon icon={faPlayCircle} fontsize="large" className="footer_green"/>
                <FontAwesomeIcon icon={faForward} className="footer_icon"/>
                <FontAwesomeIcon icon={faRedoAlt} className="footer_green"/>

            </div>
            <div className="footer_right">
           {/* <Grid container spacing={2}>
                <Grid item>
                    <FontAwesomeIcon icon={faFileAudio} className="footer_green"/>
                </Grid>
                <Grid item>
                    <FontAwesomeIcon icon={faVolumeDown} className="footer_green"/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
        </Grid>
    */}
            </div>
        </div>
    )
}

export default Footer
