import { Image } from 'react-bootstrap'
import './AboutMe.sass'

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me_text">
                <h2 className="about-me_text-title">About Me</h2>
                <p className="about-me_text-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis totam vitae nostrum accusamus fugit quod, sapiente assumenda aut velit reiciendis.</p>
            </div>
            <div className="about-me_image">
                <Image 
                    src="https://jhondev.ninja/031b26af0485576a14cb.jpg"
                    className="about-me_image-image"
                />
            </div>
        </div>
    )
}

export default AboutMe
