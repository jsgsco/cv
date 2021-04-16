import { createContext} from 'react'

export const DataUserContext = createContext()

const DataUserProvider = (props) => {

   
    return (
        <DataUserContext.Provider value={{
        }}>
            {props.children}
        </DataUserContext.Provider>
    )
}

export default DataUserProvider