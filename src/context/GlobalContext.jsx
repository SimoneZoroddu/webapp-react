import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)

    return (
        <GlobalContext.Provider value={{ loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )

}


const GlobalContextUse = () => {

    return useContext(GlobalContext)

}


export { GlobalContextProvider, GlobalContextUse }