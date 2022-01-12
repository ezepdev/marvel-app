import { connect } from 'react-redux'
import CharacterCard from 'components/CharacterCard'
import { getCharacter } from 'redux/actions'

const mapStateToProps = state => {
    return {
        character: state.character,
        isLoading: state.status == 'loading',
    }
}

const CardCharacterContainer = connect(mapStateToProps)(CharacterCard)

export default CardCharacterContainer
