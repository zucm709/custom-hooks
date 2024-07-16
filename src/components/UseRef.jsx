import React, { useRef } from 'react'

const UseRef = () => {
    const inputElem = useRef();
    const refFunc = () => {
        console.log(inputElem.current)
        inputElem.current.style.background = "Green"

    }
    return (
        <div>
            <input type="text" ref={inputElem} /><br />
            <button onClick={refFunc}>ref@test</button>
        </div>
    )
}

export default UseRef
