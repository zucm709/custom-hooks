import React, { useContext } from 'react'
import { HookContext } from '../context/HookContext'

const Contact = () => {
    const phone = useContext(HookContext)

    return (
        <div>
            <h3>Contact: {phone}</h3>
        </div>
    )
}

export default Contact
