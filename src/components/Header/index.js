import './index.css'
import image from '../../images/marvel-image.png'
import CharacterSearcher from 'containers/CharacterSearcher'

let Header = () => {
    return (
        <header className="header-container">
            <a className="header-logo" href="/">
                <img className="header-logo-img" alt="marvel-logo" src={image} />
            </a>
            <CharacterSearcher />
        </header>
    )
}

export default Header
