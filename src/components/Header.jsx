import React from 'react'

const Header = () => {
    console.log('header rendered')
    return (
        <div>
            <h3>Header</h3>
        </div>
    )
}

export default React.memo(Header)
