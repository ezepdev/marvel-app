import { useState } from 'react'
import { connect, batch } from 'react-redux'
import { push } from 'connected-react-router'
import './index.css'

let CharacterSearcher = props => {
    const { dispatch } = props
    const [showInput, setShowInput] = useState(false)
    const [value, setValue] = useState('')

    const handleChange = e => {
        const { value } = e.target
        setValue(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (value !== '') dispatch(push(`/search`, { key: `${value}` }))
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
                    {!showInput ? 'search' : 'navigate_next'}
                </button>
                <input
                    style={showInput ? showStyles : hiddenStyles}
                    onChange={handleChange}
                />
                {showInput && (
                    <button
                        className="searcher-submit-button material-icons material-icons-outlined"
                        type="submit"
                    >
                        <span>search </span>
                    </button>
                )}
            </div>
        </form>
    )
}

CharacterSearcher = connect()(CharacterSearcher)

export default CharacterSearcher
