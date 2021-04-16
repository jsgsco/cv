import { createContext, useState } from 'react'


export const DataNavContext = createContext()

const DataNavProvider = (props) => {

    // States
    const [openShowMenu, setOpenShowMenu] = useState(false)

    
    return (
        <DataNavContext.Provider value={{
            openShowMenu,
            setOpenShowMenu
        }}>
            {props.children}
        </DataNavContext.Provider>
    )

}


export default DataNavProvider