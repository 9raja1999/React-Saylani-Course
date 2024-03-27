import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [show, setShow] = useState(false)
    return <GlobalContext.Provider
        value={{
            user,
            setUser,
            show,
            setShow
        }}
    >
        {children}
    </GlobalContext.Provider>
}

export default AppContext