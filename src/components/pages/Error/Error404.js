import { Image } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import './Error404.sass'

const Error404 = ({history}) => {    
    
    // After 5 seconds, the push will be made at the beginning so that you can not stay on this website
    setTimeout(() => {
        history.push('/')
    }, 5000);

    return (
        <div className="error">
            <div className="error_404">
                <Image 
                    src="https://jsgsco-backend.s3-us-west-1.amazonaws.com/pixeltrue-error-1.png"
                    className="error_404-image"
                /> 
            </div>
            <div className="error_text">
                <p 
                    className="error_text_text"
                >This web page does not exist, try again!</p>
                <p>You will be redirected to Home in a few seconds, wait!</p>
            </div>
        </div>
    )
}

export default withRouter(Error404)
