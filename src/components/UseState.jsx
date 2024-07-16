import React, { useState } from 'react'

const UseState = () => {
    const [color, setColor] = useState('Green')
    const changeColor = () => {
        setColor("Always Green")
    }
    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2023",
        color: "Green",
    })
    const updateProp = () => {
        setCar((prev) => {
            return { ...prev, brand: "Lamborhini" }
        })
    }
    return (
        <div>
            <h4>{color}</h4>
            <button onClick={changeColor}>Change state</button>
            <p>My New Car Is {car.brand} {car.model} {car.year} {car.color}</p>
            <button onClick={updateProp}>update props</button>
        </div>
    )
}

export default UseState
