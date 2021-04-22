import { useState, useContext } from 'react'
import { DataHomeContext } from '../context/DataHomeProvider'
import './Footer.sass'

const Footer = () => {

    // All the data is obtained from the Context
    const { postNewsletterAPI } = useContext(DataHomeContext)

    // States
    const [data, setData] = useState({
        email: ''
    })
    const [error, setError] = useState(undefined)
    const [correctly, setCorrectly] = useState(undefined)

    // Read the email values
    const updateState = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // Destructuring data 
    const { email } = data

    const submitNews = async (e) => {
        e.preventDefault()

        // Validate Email
        if(email.trim() === '') {
            setError('Error, cant send this empty field!')
            setTimeout(() => {
                setError('')
            }, 3000);
            return null
        }

        // State data is sent to the API
        const response = await postNewsletterAPI(data)
        // Valid that the account does not exist
        if(response.statusCode === 500) {
            setError('Error sending mail, try again later')
            setTimeout(() => {
                setError('')
            }, 3000);
            return null
        }
        // It was sent correctly, and proceed to clean the form
        setCorrectly('We have received your email')
        setData({
            email: ''
        })
        setTimeout(() => {
            setCorrectly('')
        }, 3000);
        return response
    }

    return (
        <div className="footer">
            <div className="footer_social">
                <a 
                    href="#aboutme" 
                    className="footer_social-button"
                >About Me</a>
                <a 
                    href="#features" 
                    className="footer_social-button"
                >Features</a>
            </div>
            <div className="footer_info">
                <p className="footer_info-text">This website is created with a lot of love and a lot of patience, ReactJS + Strapi + MongoDB was used, I hope you like it.</p>
            </div>
            <div className="footer_newsletter">
                <form 
                    className="footer_newsletter-form"
                    onSubmit={ submitNews }
                >
                    {
                        correctly ? <p className="footer_newsletter-form-success">{correctly}</p> : null
                    }
                    {
                        error ? <p className="footer_newsletter-form-error">{error}</p> : null
                    }
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your Email"
                        className="footer_newsletter-form-input"
                        onChange={ updateState }
                    />
                    <button
                        type="submit"
                        className="footer_newsletter-form-submit"
                    >Submit</button>
                    <p className="footer_newsletter-form-text">Newsletter, no spam is sent ❤️</p>
                </form>
            </div>
        </div>
    )
}

export default Footer
