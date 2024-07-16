import React, { useReducer, useState } from 'react'

const UseReducer = () => {

    const initialState = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': {
                return { count: state.count + 1 }
            }
            case 'decrease': {
                return { count: state.count - 1 }
            }
            case 'input': {
                return { count: action.payload }
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: 'increase' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>Decremtent</button>
            <br />
            <input value={state.count}
                type="number" onChange={(e) => dispatch({ type: 'input', payload: Number(e.target.value) })} />

        </div>
    )
}

export default UseReducer
