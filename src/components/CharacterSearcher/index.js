import { useState } from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { findCharacterByName } from 'redux/actions/character'
import './index.css'

let CharacterSearcher = ({ dispatch }) => {
    const [showInput, setShowInput] = useState(false)
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    console.log(navigate)

    const handleChange = e => {
        const { value } = e.target
        setValue(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(findCharacterByName(value))
        if (value !== '') navigate(`/search/${value}`)
    }

    const showStyles = {
        width: '200px',
        maxHeight: '100px',
        padding: '10px',
        border: 0,
    }

    const hiddenStyles = {
        border: 0,
        padding: 0,
        width: 0,
    }

    return (
        <form className="searcher" onSubmit={handleSubmit}>
            <div className="searcher">
                <button
                    type="button"
                    onClick={e => setShowInput(state => !state)}
                    className="searcher-button material-icons material-icons-outlined"
                >
                    search
                </button>
                <input
                    style={showInput ? showStyles : hiddenStyles}
                    onChange={handleChange}
                />
                <button type="submit">Buscar</button>
            </div>
        </form>
    )
}

CharacterSearcher = connect()(CharacterSearcher)

export default CharacterSearcher
