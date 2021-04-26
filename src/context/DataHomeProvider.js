import { createContext, useEffect, useState } from 'react'
import { BASE_PATH } from '../config/const'

export const DataHomeContext = createContext()

const DataHomeProvider = (props) => {

    // States
    const [title, setTitle] = useState(undefined)
    const [button, setButton] = useState(undefined)
    const [aboutMe, setAboutMe] = useState(undefined)
    const [features, setFeatures] = useState(undefined)

    // The title of the web is obtained from the API
    const getTitleAPI = async () => {
        try {
            const url = `${BASE_PATH}/titles`
            const response = await fetch(url)
            const result = await response.json()
            setTitle(result[0].title)
        } catch (error) {
            return null
        }
    }

    // Search the API for social buttons
    const getButtonsAPI = async () => {
        try {
          const url = `${BASE_PATH}/socials`  
          const response = await fetch(url)
          const result = await response.json()
          setButton(result)
        } catch (error) {
            return null
        }
    }

    // Search the API for about-me information
    const getAboutMeAPI = async () => {
        try {
            const url = `${BASE_PATH}/about-mes`
            const response = await fetch(url)
            const result = await response.json()
            setAboutMe(result)
        } catch (error) {
            return null
        }
    }

    // Search the API for features information
    const getFeatureAPI = async () => {
        try {
            const url = `${BASE_PATH}/features`
            const response = await fetch(url)
            const result = await response.json()
            setFeatures(result)
        } catch (error) {
            return null
        }
    }

    // Send email to API
    const postNewsletterAPI = async (formData) => {
        try {
            const url = `${BASE_PATH}/newsletters`
            const params = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch(url, params)
            const result = await response.json()
            return result
        } catch (error) {
            return null   
        }
    }

    // To avoid an infinite loop use the useEffect
    useEffect(() => {
        getTitleAPI()
    }, [])

    useEffect(() => {
        getButtonsAPI()
    }, [])

    useEffect(() => {
        getAboutMeAPI()
    }, [])

    useEffect(() => {
        getFeatureAPI()
    }, [])

    return (
        <DataHomeContext.Provider value={{
            title,
            button,
            aboutMe,
            features,
            postNewsletterAPI
        }}>
            {props.children}
        </DataHomeContext.Provider>
    )
}

export default DataHomeProvider