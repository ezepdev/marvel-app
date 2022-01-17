import React from 'react'
import { connect } from 'react-redux'
import { getCharacters } from 'redux/actions/character'
import './index.css'

let ShowMoreCharacters = ({ dispatch, isLoading }) => {
    const handleClick = () => {
        dispatch(getCharacters())
    }

    return isLoading ? (
        'Cargando'
    ) : (
        <button className="show-more-characters-btn" onClick={handleClick}>
            Mostrar mas...
        </button>
    )
}

const mapStateToProps = state => ({
    isLoading: state.status == 'loading',
})

ShowMoreCharacters = connect(mapStateToProps)(ShowMoreCharacters)

export default ShowMoreCharacters
