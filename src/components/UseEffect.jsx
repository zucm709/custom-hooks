import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    }, [])
    const updateProp = () => {
        setCount((count) => count + 1)
    }
    return (
        <div>
            <button onClick={updateProp}>Update</button>
            <h4>{count}</h4>
        </div>
    )
}

export default UseEffect
