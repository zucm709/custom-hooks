import React, { useCallback, useState } from 'react'
import Header from './Header'

const UseCallBack = () => {

    const [count, setCount] = useState(0)

    const newFn = useCallback(() => { }, [count])

    return (
        <div>
            <Header newFn={newFn} />
            <h3>{count}</h3>
            <button onClick={() => setCount(prev => prev + 1)}>cached</button>
        </div>
    )
}

export default UseCallBack
