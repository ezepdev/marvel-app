import { connect } from 'react-redux'
import CharactersList from 'components/CharactersList'

const mapStateToProps = state => {
    return {
        characters: state.characters,
    }
}

const CardCharacterContainer = connect(mapStateToProps)(CharactersList)

export default CardCharacterContainer
