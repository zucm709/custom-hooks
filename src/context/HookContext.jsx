import React, { createContext } from 'react'

export const HookContext = createContext()

const ContextProvider = (props) => {

    const phone = "+234 9163417945"

    return (
        <HookContext.Provider value={phone}>
            {props.children}
        </HookContext.Provider>
    )
}
export default ContextProvider;