import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [counts, setCounts] = useState(0);

    function cube(num) {
        console.log('calculation done')
        return Math.pow(num, 10)
    }
    const result = useMemo(() => { return cube(number) }, [number])

    return (
        <div>
            <input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <h3>Cube of The Number: {result}</h3>
            <button onClick={() => { setCounts(counts + 1) }}>memoize</button>
            <h3>{counts}</h3>
        </div>
    )
}

export default UseMemo
