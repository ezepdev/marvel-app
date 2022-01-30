import { useState } from 'react'
import './index.css'

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

const Searcher = ({ onSubmit }) => {
    const [showInput, setShowInput] = useState(false)
    const [value, setValue] = useState('')

    const handleChange = e => {
        const { value } = e.target
        setValue(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(value)
    }

    return (
        <form className="searcher" onSubmit={handleSubmit}>
            <div className="searcher">
                <button
                    type="button"
                    onClick={() => setShowInput(state => !state)}
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

export default Searcher
