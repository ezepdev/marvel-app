import { connect } from 'react-redux'
import CharactersList from 'components/CharactersList'

const mapStateToProps = ({ characters }) => {
    console.log(characters);
    return {
        characters: characters.data,
        isLoading: characters.status === 'loading',
    }
}

const Wrapper = ({ characters, isLoading }) => {

    return characters.length !== 0 || isLoading ? <CharactersList characters={characters} /> : 'No hay resultados para mostrar' // fallback
}
const CardCharacterContainer = connect(mapStateToProps)(Wrapper)

export default CardCharacterContainer
