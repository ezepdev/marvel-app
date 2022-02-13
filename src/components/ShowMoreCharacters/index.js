import React from 'react'
import { connect } from 'react-redux'
import { getCharacters } from 'redux/actions/characters'
import './index.css'

let ShowMoreCharacters = ({ dispatch, isLoading }) => {
    const handleClick = () => {
        dispatch(getCharacters())
    }

    return isLoading ? (
        'Cargando'
    ) : (
        <button className="show-more-characters-btn" onClick={handleClick}>
            <span className="material-icons material-icons-outlined arrow-down">
                keyboard_arrow_down
            </span>
        </button>
    )
}

const mapStateToProps = ({ characters }) => ({
    isLoading: characters.status === 'loading',
})

ShowMoreCharacters = connect(mapStateToProps)(ShowMoreCharacters)

export default ShowMoreCharacters
