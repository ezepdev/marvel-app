import { useState } from 'react'
import './index.css'
import image from '../../images/marvel-image.png'

const Header = () => {
    const [showInput, setShowInput] = useState(false)

    const handleChange = e => {
        const value = e.target
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
        <nav className="header-container">
            <a className="header-logo" href="/">
                <img className="header-logo-img" src={image} />
            </a>
            <form
                className="searcher"
                onSubmit={e => {
                    e.preventDefault()
                }}
            >
                <div className="searcher">
                    <button
                        onClick={() => {
                            setShowInput(state => !state)
                        }}
                        className="searcher-button material-icons material-icons-outlined"
                    >
                        search
                    </button>
                    <input
                        style={showInput ? showStyles : hiddenStyles}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </nav>
    )
}

export default Header
