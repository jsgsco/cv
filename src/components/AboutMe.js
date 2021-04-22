import { Fragment, useContext } from 'react'
import { DataHomeContext } from '../context/DataHomeProvider'
import { Image } from 'react-bootstrap'
import { map } from 'lodash'

import './AboutMe.sass'

const AboutMe = () => {

    const { aboutMe } = useContext(DataHomeContext)

    return (
        <div className="about-me" id="aboutme">
            {
                map(aboutMe, (about) => (
                    <Fragment key={about.id}>
                        <div className="about-me_text">
                            <h2 className="about-me_text-title ">{about.title}</h2>
                            <p className="about-me_text-text">{about.summary}</p>
                            <p className="about-me_text-text">{about.summary2}</p>
                            <p className="about-me_text-text">{about.summary3}</p>
                            <p className="about-me_text-text">{about.summary4}</p>
                        </div>
                        <div className="about-me_image">
                            <Image 
                                src="https://jsgsco-backend.s3-us-west-1.amazonaws.com/profile.jpg"
                                className="about-me_image-image"
                            />
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}

export default AboutMe
