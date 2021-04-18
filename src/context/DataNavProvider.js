import { createContext, useEffect, useState } from 'react'
import { firebase } from '../config/firebase'


export const DataNavContext = createContext()

const DataNavProvider = (props) => {

    // States
    const [openShowMenu, setOpenShowMenu] = useState(false)
    const [dataNav, setDataNav] = useState([])

    // Call the API to get the navigation list
    const getNavFirebase = async () => {
        const db = firebase.firestore()
        try {
            const data = await db.collection('navegacion').get()
            const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            return arrayData
        } catch (error) {
            return null
        }
    }

    // UseEffect is used to prevent an infinite loop from being created
    useEffect(() => {
        (async () => {
            const response = getNavFirebase()
            setDataNav(response)
        })()
    }, [])

    return (
        <DataNavContext.Provider value={{
            openShowMenu,
            dataNav,
            setOpenShowMenu
        }}>
            {props.children}
        </DataNavContext.Provider>
    )

}


export default DataNavProvider