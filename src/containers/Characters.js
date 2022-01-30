import { connect } from 'react-redux'
import CharactersList from 'components/CharactersList'

const mapStateToProps = ({ characters }) => {
    return {
        characters: characters.data,
        isLoading: characters.status === 'loading',
    }
}

const CardCharacterContainer = connect(mapStateToProps)(CharactersList)

export default CardCharacterContainer
