import React from 'react'
import { connect } from 'react-redux'

let ShowMoreCharacters = ({ dispatch }) => {
    const handleClick = () => {
        dispatch()
    }

    return <button onClick={handleClick}>Mostrar mas...</button>
}

ShowMoreCharacters = connect()(ShowMoreCharacters)

export default ShowMoreCharacters
