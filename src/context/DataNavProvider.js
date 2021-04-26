import { createContext, useEffect, useState } from 'react'
import { BASE_PATH } from '../config/const'

export const DataNavContext = createContext()

const DataNavProvider = (props) => {

    // States
    const [openShowMenu, setOpenShowMenu] = useState(false)
    const [dataNav, setDataNav] = useState(undefined)

    // Call the API to get the navigation list
    const getNavAPI = async () => {
        try {
            const url = `${BASE_PATH}/navegacions`
            const response = await fetch(url)
            const result = await response.json()
            setDataNav(result)
        } catch (error) {
            return null
        }
    }

    // UseEffect is used to prevent an infinite loop from being created
    useEffect(() => {
        getNavAPI()
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